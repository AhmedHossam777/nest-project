import { IsString, IsNumber } from 'class-validator';

export class CreatePaymentDto {
  @IsString()
  username: string;

  @IsString()
  currency: string;

  @IsNumber()
  amount: number;
}