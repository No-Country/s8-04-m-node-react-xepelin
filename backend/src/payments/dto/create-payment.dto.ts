import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDate, IsOptional } from 'class-validator';
import { IsString, MinLength } from 'class-validator';

export class CreatePaymentDto {
  @ApiProperty({
    description: 'Loan amount',
    nullable: false,
    minLength: 1,
  })
  @IsString()
  amount: string;

  @ApiProperty({
    description: 'Interest rate',
    nullable: false,
    minLength: 1,
  })
  @IsString()
  interestRate: string;

  @ApiProperty({
    description: 'Payment Deadline',
    nullable: false,
    minLength: 1,
  })
  @IsDate()
  paymentDeadline: string;

  @ApiProperty({
    description: 'Employee id',
    nullable: false,
    minLength: 1,
  })
  @IsString()
  employeeApplied: string;

  @ApiProperty({
    description: 'Company id',
    nullable: false,
    minLength: 1,
  })
  @IsString()
  company: string;

  /*
    @ApiProperty({
        description: 'Bills id',
        nullable: false,
        minLength: 1,
    })
    @IsArray()
    bills: string[];
  */
}
