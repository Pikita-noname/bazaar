import { UserDTO } from "../../repository/DTOs/UserDTO";

export interface IOrderService {
  createFromCart();
  getOrderbyId();
  getOrdersByUser();
}
