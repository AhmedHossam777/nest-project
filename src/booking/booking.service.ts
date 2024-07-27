import { Injectable } from '@nestjs/common';

@Injectable()
export class BookingService {
  getAllReservations() {
    return 'All reservations';
  }

  createReservation() {
    return 'reservation created';
  }
}