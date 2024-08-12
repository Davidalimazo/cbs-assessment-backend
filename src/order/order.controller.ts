import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { Status, UpdateProductDto } from 'src/interfaces/order.interface';
import { StatusValidationPipe } from 'src/utils/validators/order_status';
import { UpdateOrderDto } from 'src/utils/validators/update_order';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  findAll(
    @Query('page', ParseIntPipe) page: number,
    @Query('pageSize', ParseIntPipe) pageSize: number,
  ) {
    return this.orderService.findAll(+page, +pageSize);
  }
  @Get('status')
  @UsePipes(new StatusValidationPipe())
  findByStatus(@Query('status') status: Status) {
    return this.orderService.findByStatus(status);
  }

  @Put('status')
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  updateByStatus(@Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.updateStatusById(
      updateOrderDto.user_id,
      updateOrderDto.products,
    );
  }
}
