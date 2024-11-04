export class CartItem {
  id: number;
  cartId: number;
  productId: number;
  quantity: number;
  constructor(data: Partial<CartItem>) {
    Object.assign(this, data);
  }
}
