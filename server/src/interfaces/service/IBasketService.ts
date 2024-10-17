import { AddUserDTO } from "../../repository/DTOs/addUserDTO";

export interface IBasketService {
  addProduct();
  removeProduct();
  getBaket();
  removeBasket();
}
