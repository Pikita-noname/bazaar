import { OrderStatus } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

export class Order {
  id: number;
  userId: number;
  totalPrice: Decimal;
  status: OrderStatus;
  createdAt: Date;
  updatedAt: Date;
}
