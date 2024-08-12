import { AxiosError } from 'axios';
import { HttpService } from '@nestjs/axios';
import { OrderService } from './order.service';
import { catchError, firstValueFrom } from 'rxjs';
import { Injectable, Logger } from '@nestjs/common';
import {
  Order,
  Status,
  UpdateProductDto,
  UpdateResponse,
} from 'src/interfaces/order.interface';

@Injectable()
export class OrderRepository {
  constructor(private readonly httpService: HttpService) {}
  private readonly logger = new Logger(OrderService.name);

  async findAll(page: number, pageSize: number): Promise<Order[]> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<Order[]>('https://fake-store-api.mock.beeceptor.com/api/orders')
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw 'An error happened!';
          }),
        ),
    );
    if (page < 1) page = 1;
    if (pageSize < 1) pageSize = 5;
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data.slice(startIndex, endIndex);
  }

  async findByStatus(status: Status): Promise<Order[]> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<Order[]>('https://fake-store-api.mock.beeceptor.com/api/orders')
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw 'An error happened!';
          }),
        ),
    );
    return data.filter((e) => e.status == status);
  }

  async updateStatusById(
    user_id: number,
    products: UpdateProductDto[],
  ): Promise<UpdateResponse> {
    const { data } = await firstValueFrom(
      this.httpService
        .put<UpdateResponse>(
          'https://fake-store-api.mock.beeceptor.com/api/orders',
          {
            user_id,
            items: products,
          },
        )
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw 'An error happened!';
          }),
        ),
    );
    return data;
  }
}
