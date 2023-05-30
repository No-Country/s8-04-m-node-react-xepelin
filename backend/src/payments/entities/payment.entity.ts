import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Types } from 'mongoose';

export class Payment extends Document {
  @ApiProperty()
  @Prop({ default: '0' })
  amount: string;

  @ApiProperty()
  @Prop()
  interestRate: string;

  @ApiProperty()
  @Prop({ default: new Date() })
  startDate: Date;

  @ApiProperty()
  @Prop({
    default: () => {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + 60);
      return currentDate.toISOString();
    },
  })
  paymentDeadline: Date;

  @ApiProperty()
  @Prop({ array: false, ref: 'User' })
  employeeApplied: Types.ObjectId;

  @ApiProperty()
  @Prop({ array: false, ref: 'Company' })
  company: Types.ObjectId;

  //@ApiProperty()
  //@Prop({ array: true, ref: 'Bills' })
  //bills: Types.ObjectId[];
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
