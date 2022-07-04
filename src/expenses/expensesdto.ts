import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateExpenseDto {
  @IsString()
  @IsNotEmpty()
  public expense: string;

  @IsDate()
  @IsNotEmpty()
  public date: Date;

  @IsNumber()
  @IsNotEmpty()
  public price: number;
}
