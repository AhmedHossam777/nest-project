import { Controller, Get, Post } from '@nestjs/common';
import { BookingService } from './booking.service';

@Controller('booking')
export class BookingController {
  constructor(private bookingService: BookingService) {}
  @Get()
  getAllReservations() {
    return this.bookingService.getAllReservations();
  }

  @Post()
  createReservation() {
    return this.bookingService.createReservation();
  }
}