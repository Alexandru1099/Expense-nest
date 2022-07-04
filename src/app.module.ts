import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import ExpensesModule from './expenses/expenses.module';
import ormconfig from 'ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
    }),
    ConfigModule,
    ExpensesModule,
    TypeOrmModule.forRoot(ormconfig),
  ],
})
export class AppModule {}
