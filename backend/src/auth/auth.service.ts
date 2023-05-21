import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User, ResetPassword } from './entities';

// import { transporter } from '../config/transporter';
import { CreateUserDto, LoginUserDto, UpdateUserDto } from './dto';
import { JwtPayload } from './interfaces';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,

    @InjectModel(ResetPassword.name)
    private readonly resetPasswordModel: Model<ResetPassword>,

    private readonly jwtService: JwtService,
  ) {}

  async create(createAuthDto: CreateUserDto) {
    try {
      const { password, ...userData } = createAuthDto;

      const user = this.userModel.create({
        ...userData,
        password: bcrypt.hashSync(password, 10),
      });

      (await user).save();

      return {
        // ...(await user).toJSON(),
        token: this.getJwtToken({ id: (await user)._id }),
      };
    } catch (error) {
      this.handleDBError(error);
    }
  }
  async login(loginAuthDto:LoginUserDto){
    try{
      const {email,password} = loginAuthDto;
      const findUser = await this.userModel.findOne({email}).select('-password');
      const findbyPass = await this.userModel.findOne({email});

      if(!findUser){
        throw new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND);
      }
      const comparePassword = await bcrypt.compare(password,findbyPass.password);

      if(!comparePassword){
        throw new HttpException('PASSWORD_INCORRECT', HttpStatus.FORBIDDEN);
      }

      const payload = { id:findUser._id, firstname:findUser.firstName};
      const token = this.jwtService.sign(payload);

      const data = {
        user: findUser,
        token: token
      }

      return data

    }catch(error){
      this.handleDBError(error);
    }
  }

  async updateUser(id:string, updateUserDto:UpdateUserDto){
   const userUpdate = await this.userModel.findByIdAndUpdate(id, updateUserDto,{new:true});
   
   if (!userUpdate) {
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
   }
   if (updateUserDto.password) {
      const hashedPassword =bcrypt.hashSync(userUpdate.password, 10); 
      userUpdate.password = hashedPassword; 
   }

   const userSave = await userUpdate.save();

   if(userSave && userSave.password){
    userUpdate.password =undefined
   }
   return userSave
  }
  // async update(id: string, updateUserDto: UpdateUserDto) {
  //   const user = this.userModel.findOne({ where: { id } });
  //   if (!user) {
  //     throw new UnauthorizedException('User not login');
  //   }
  //   const update = await this.userModel.preload({ id, ...updateUserDto });
  //   this.userModel.save(update);
  //   return update;
  // }

  // async login(loginUserDto: LoginUserDto) {
  //   const { email, password } = loginUserDto;

  //   const user = await this.authRepository.findOne({
  //     where: { email },
  //     select: {
  //       email: true,
  //       password: true,
  //       id: true,
  //       firstName: true,
  //       lastName: true,
  //       roles: true,
  //     },
  //   });

  //   if (!user) {
  //     throw new UnauthorizedException('Credential are not valid (email)');
  //   }

  //   if (!bcrypt.compareSync(password, user.password)) {
  //     throw new UnauthorizedException('Credential are not valid (password)');
  //   }

  //   delete user.password;

  //   return { ...user, token: this.getJwtToken({ id: user.id }) };
  // }

  private getJwtToken(payload: JwtPayload) {
    const token = this.jwtService.sign(payload);
    return token;
  }

  // async forgot(email: string) {
  //   const token = Math.random().toString(20).substring(2, 12);
  //   const user = await this.authRepository.findOne({ where: { email } });

  //   if (!user) throw new BadRequestException('Email dont exist');

  //   const reset = this.resetPasswordRepository.create({ email, token });
  //   await this.resetPasswordRepository.save(reset);

  //   const url = `https://mimustore.vercel.app/mimu/resetpassword/${token}`;

  //   await transporter.sendMail({
  //     to: email,
  //     from: 'jobsmatch23@gmail.com',
  //     subject: 'Reset your password',
  //     html: `<h1>recuperar contraseña</h1> <a href="${url}">Reset here</a>`,
  //   });

  //   return { message: 'Please check your email' };
  // }

  // async reset(token: string, password: string, confirmed_password: string) {
  //   if (password !== confirmed_password)
  //     throw new BadRequestException('Password dont match');

  //   const passwordReset = await this.resetPasswordRepository.findOne({
  //     where: { token },
  //   });
  //   console.log(passwordReset);
  //   const user = await this.authRepository.findOne({
  //     where: { email: passwordReset.email },
  //   });

  //   if (!user) throw new BadRequestException('user not found');

  //   const hashPassword = await bcrypt.hash(password, 10);

  //   await this.authRepository.update(user.id, { password: hashPassword });

  //   return { message: 'Password changed successfully' };
  // }

  private handleDBError(error: any): never {
    if (error.code === 11000)
      throw new BadRequestException(`${error.keyValue['email']} exists`);

    console.log(error);

    throw new InternalServerErrorException('Please check your logs');
  }
}
