import { IsNotEmpty, IsNumber } from "class-validator";

export class CartDTO {
  @IsNotEmpty()
  @IsNumber()
  public userId: number;
  constructor(data: Partial<CartDTO>) {
    Object.assign(this, data);
  }
}
