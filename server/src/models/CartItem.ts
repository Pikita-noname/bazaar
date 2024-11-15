import { Decimal } from "@prisma/client/runtime/library";

export class CartItem {
  id: number;
  cartId: number;
  productId: number;
  quantity: number;
  price: Decimal
  constructor(data: Partial<CartItem>) {
    Object.assign(this, data);
  }
}
