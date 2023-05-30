import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi.schema';

import { AuthModule } from './auth/auth.module';
import { CompaniesModule } from './companies/companies.module';
import { PaymentsModule } from './payments/payments.module';
import { DebtModule } from './debt/debt.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB'),
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    CompaniesModule,
    PaymentsModule,
    DebtModule,
  ],
})
export class AppModule {}
