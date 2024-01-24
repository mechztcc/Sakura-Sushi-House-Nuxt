import type { IOrderProduct } from "./order-product.interface";

export interface IOrder {
  id: string;
  preferences: string;
  paymentType: string;
  status: string;
  createdAt: string;
  products: IOrderProduct[];
}
