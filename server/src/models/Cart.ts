import { CartItem } from "./CartItem";

export class Cart {
  public id: number;
  public userId: number;
  public createdAt: Date;
  public updatedAt: Date;
  public cartItems: CartItem[]
  constructor() {}
}
