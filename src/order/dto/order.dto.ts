import { Order } from 'src/interfaces/order.interface';

export type IOrderPartial = Partial<Order>;

export interface QueryData {
  page: number;
  pageSize: number;
}
