import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Expense } from './expenses.entity';
import { ExpensesService } from './expenses.service';
import { CreateExpenseDto } from './expensesdto';

@Controller('expense')
export class ExpensesController {
  constructor(private expensesService: ExpensesService) {}

  @Get()
  async getExpenses(): Promise<Expense> {
    return this.expensesService.getExpenses();
  }

  @Post()
  async createExpenses(@Body() body: CreateExpenseDto): Promise<Expense> {
    return this.expensesService.createExpenses(body);
  }

  @Delete(':id')
  async deleteExpenses(@Param('id') id: number): Promise<void> {
    return this.expensesService.deleteExpenses(id);
  }

  @Patch(':id/expense')
  async updateExpenses(
    @Param('id') id: number,
    @Body('expense') expense: string,
  ): Promise<Expense> {
    return this.expensesService.updateExpenses(id, expense);
  }
}
