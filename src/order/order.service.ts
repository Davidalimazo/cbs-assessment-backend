import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { OrderRepository } from './order.respository';
import { Status, UpdateProductDto } from 'src/interfaces/order.interface';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepository: OrderRepository) {}

  async findAll(page: number, pageSize: number) {
    try {
      return this.orderRepository.findAll(page, pageSize);
    } catch (error: any) {
      return new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
  async findByStatus(status: Status) {
    try {
      return this.orderRepository.findByStatus(status);
    } catch (error: any) {
      return new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async updateStatusById(user_id: number, products: UpdateProductDto[]) {
    try {
      return this.orderRepository.updateStatusById(user_id, products);
    } catch (error: any) {
      return new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
