import { IsNotEmpty, IsNumber } from "class-validator";

export class CartItemDTO {
  @IsNotEmpty()
  cartId: number;
  @IsNotEmpty()
  productId: number;
  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  constructor(data: Partial<CartItemDTO>) {
    Object.assign(this, data);
  }
}
