import { Cart } from "../../models/Cart";
import { Order } from "../../models/Order";
import { User } from "../../models/User";

export interface IOrderService {
  createFromCart(cartId: number): Promise<void>;
  getOrdersByUser(user: User): Promise<Order[]>;
}
