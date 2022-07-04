import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Expense } from './expenses.entity';
import { CreateExpenseDto } from './expensesdto';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectConnection()
    private readonly connection: Connection,
    @InjectRepository(Expense)
    private expensesRepository: Repository<Expense>,
  ) {}

  async getExpenses() {
    return this.connection.query('SELECT * FROM expense');
  }

  async createExpenses(body: CreateExpenseDto): Promise<Expense> {
    return this.expensesRepository.save({
      expense: body.expense,
      date: body.date,
      price: body.price,
    } as any);
  }

  async deleteExpenses(id: number): Promise<void> {
    const result = await this.expensesRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Expense with id "${id}" not found`);
    }
  }

  async updateExpenses(id: number, expense: string): Promise<Expense> {
    const expenses = await this.expensesRepository.findOne(id);
    expenses.expense = expense;
    await this.expensesRepository.save(expenses);
    return expenses;
  }
}
