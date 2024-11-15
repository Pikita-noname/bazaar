import { Decimal } from "@prisma/client/runtime/library";

export class OrderItemDTO {
  public productId: number;
  public quantity: number;
  public price: Decimal;
  constructor(data: Partial<OrderItemDTO>) {
    Object.assign(this, data);
  }
}
