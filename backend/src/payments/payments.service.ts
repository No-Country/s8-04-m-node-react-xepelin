import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Payment } from './entities/payment.entity';
import { Model } from 'mongoose';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectModel(Payment.name)
    private readonly paymentModel: Model<Payment>,
  ) {}
  async create(createPaymentDto: CreatePaymentDto) {
    try {
      const { ...paymentData } = createPaymentDto;

      const newPayment = this.paymentModel.create({
        ...paymentData,
      });

      //test example
      //new mongoose.Types.ObjectId(paymentData.employeeApplied.toString()),
      //new mongoose.Types.ObjectId(paymentData.company.toString()),

      (await newPayment).save();
      return await newPayment;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    try {
      const payments = await this.paymentModel.find();
      return payments;
    } catch (error) {
      throw new HttpException(`Payments not found`, HttpStatus.NOT_FOUND);
    }
  }

  async findOne(id: number) {
    try {
      const payment = await this.paymentModel.findOne({ _id: id });
      return payment;
    } catch (error) {
      throw new HttpException(`Payment ${id} not found`, HttpStatus.NOT_FOUND);
    }
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return `This action updates a #${id} payment`;
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}
