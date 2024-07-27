import { IsString, IsOptional, IsNumber } from 'class-validator';

export class UpdatePaymentDto {
  @IsOptional()
  @IsString()
  username: string;

  @IsOptional()
  @IsString()
  currency: string;

  @IsOptional()
  @IsNumber()
  amount: number;
}