import { inject, injectable } from "inversify";
import { IOrderService } from "../interfaces/service/IOrderService";
import { Order } from "../models/Order";
import { OrderDTO } from "../repository/DTOs/OrderDTO";
import { OrderItemDTO } from "../repository/DTOs/OrderItemDTO";
import { IRepository } from "../interfaces/IRepository";
import { CartDTO } from "../repository/DTOs/CartDTO";
import { Cart } from "../models/Cart";

@injectable()
export class OrderService implements IOrderService {
  constructor(
    @inject("OrderRepository") private orderRepository: IRepository<Order, OrderDTO>,
    @inject("CartRepository") private cartRepository: IRepository<Cart, CartDTO>,
  ) {}

  getOrdersByUser(userId: number): Promise<Order[]> {
    return this.orderRepository.list({userId});
  }

  async createFromCart(cartId: number) {
    const cart = await this.cartRepository.get(cartId);

    const dto = new OrderDTO({
      userId: cart.userId,
      orderItems: cart.cartItems.map(
        (item) =>
          new OrderItemDTO({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price,
          })
      ),
    });

    this.orderRepository.create(dto);
  }
}
