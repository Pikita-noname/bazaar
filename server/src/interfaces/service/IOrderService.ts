import { AddUserDTO } from "../../repository/DTOs/addUserDTO";

export interface IOrderService {
  createFromBasket();
  getOrderbyId();
  getOrdersByUser();
}
