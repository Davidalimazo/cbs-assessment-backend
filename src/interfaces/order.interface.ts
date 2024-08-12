export interface Order {
  order_id: number;
  user_id: number;
  total_price: number;
  items: Items[];
  status: Status;
}

export interface Items {
  product_id: number;
  quantity: number;
}

export type Status = 'Shipped' | 'Delivered' | 'Processing' | 'picked';

export enum EStatus {
  Shipped = 'Shipped',
  Delivered = 'Delivered',
  Processing = 'Processing',
}

export interface UpdateProductDto {
  product_id: number;
  quantity: number;
}

export interface UpdateResponse {
  order_id: number;
  status: string;
  message: string;
}
