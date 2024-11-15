import { IOrderService } from "../interfaces/service/IOrderService";
import { Cart } from "../models/Cart";
import { Order } from "../models/Order";
import { User } from "../models/User";
import CartRepository from "../repository/CartRepository";
import { OrderDTO } from "../repository/DTOs/OrderDTO";
import { OrderItemDTO } from "../repository/DTOs/OrderItemDTO";
import OrderRepository from "../repository/OrderRepository";

export class OrderService implements IOrderService {
  constructor(
    private orderRepository: OrderRepository,
    private cartRepository: CartRepository
  ) {}
  getOrdersByUser(user: User): Promise<Order[]> {
    return this.orderRepository.list(user.id);
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
