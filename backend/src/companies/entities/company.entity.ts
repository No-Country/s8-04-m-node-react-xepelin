import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Types } from 'mongoose';

@Schema()
export class Company extends Document {
  @ApiProperty()
  @Prop({ unique: true })
  cuit: string;

  @ApiProperty()
  @Prop()
  name: string;

  @ApiProperty()
  @Prop()
  contact?: string;

  @ApiProperty()
  @Prop()
  address?: string;

  @ApiProperty()
  @Prop({ default: true })
  isActive: boolean;

  @ApiProperty()
  @Prop({ array: true, ref: 'User' })
  employees: Types.ObjectId[];
}

export const CompanySchema = SchemaFactory.createForClass(Company);
