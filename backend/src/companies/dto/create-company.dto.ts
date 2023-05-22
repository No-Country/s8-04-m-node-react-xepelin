import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { IsString, MinLength } from 'class-validator';

export class CreateCompanyDto {
  @ApiProperty({
    description: 'Company CUIT (unique)',
    nullable: false,
    minLength: 1,
  })
  @IsString()
  cuit: string;

  @ApiProperty({
    description: 'Company name',
    nullable: false,
    minLength: 1,
  })
  @IsString()
  @MinLength(1)
  name: string;

  @ApiProperty({
    description: 'Company contact',
    nullable: true,
    default: '+00000000000',
  })
  @IsString()
  @IsOptional()
  contact?: string;

  @ApiProperty({
    description: 'Company address',
    nullable: true,
    default: 'address',
  })
  @IsString()
  @IsOptional()
  address?: string;
}
