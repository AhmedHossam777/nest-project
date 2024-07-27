import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from './entities/payment.entity';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private paymentRepo: Repository<Payment>,
  ) {}

  async create(createPaymentDto: CreatePaymentDto) {
    const payment = await this.paymentRepo.save(createPaymentDto);
    return this.paymentRepo.save(payment);
  }

  async findAll() {
    return await this.paymentRepo.find();
  }

  async findOne(id: number) {
    if (!id) throw new NotFoundException('user not found');

    return await this.paymentRepo.findOneBy({ id });
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    const payment = await this.paymentRepo.findOneBy({ id });
    if (!payment) {
      throw new NotFoundException('payment not found');
    }
    Object.assign(payment, updatePaymentDto);

    return this.paymentRepo.save(payment);
  }

  async remove(id: number) {
    return await this.paymentRepo.delete(id);
  }
}