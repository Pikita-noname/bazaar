import { Cart } from "../../models/Cart";
import { CartDTO } from "../../repository/DTOs/CartDTO";
import { IService } from "./IService";
import { User } from "../../models/User";
import { CartItemDTO } from "../../repository/DTOs/CartItemDTO";

export interface ICartService extends IService<Cart, CartDTO> {
  addProduct(product: CartItemDTO): Promise<void>;
  removeProduct(product: CartItemDTO): Promise<void>;
  updateProduct(product: CartItemDTO): Promise<void>;
  getBaket(user: User): Promise<Cart>;
  removeCart(user: User): Promise<void>;
}
