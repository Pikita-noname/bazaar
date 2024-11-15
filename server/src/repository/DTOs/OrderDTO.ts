import { OrderItemDTO } from "./OrderItemDTO";

export class OrderDTO {
  public userId: number;
  public totalPrice: number;
  public orderItems: OrderItemDTO[];

  constructor(data: Partial<OrderDTO>) {
    Object.assign(this, data);
  }
}
