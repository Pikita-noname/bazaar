import { injectable } from "inversify";
import Repository from "./Repository";
import { IRepository } from "src/interfaces/IRepository";
import { CartDTO } from "./DTOs/CartDTO";
import { Cart } from "../models/Cart";
import { IRepositoryItems } from "../interfaces/IRepositoryItems";
import { CartItemDTO } from "./DTOs/CartItemDTO";
import { CartItem } from "../models/CartItem";

@injectable()
export default class CartRepository
  extends Repository
  implements
    IRepository<Cart, CartDTO>,
    IRepositoryItems<CartItem, CartItemDTO>
{
  async createItem(DTO: CartItemDTO): Promise<void> {
    await this.orm.cartItem.create({ data: DTO });
  }
  async updateItem(model: CartItem): Promise<void> {
    await this.orm.cartItem.update({ data: model, where: { id: model.id } });
  }
  async deleteItem(id: number): Promise<void> {
    await this.orm.cartItem.delete({ where: { id } });
  }
  async create(DTO: CartDTO): Promise<void> {
    await this.orm.cart.create({ data: DTO });
  }

  async get(id: number): Promise<Cart> {
    return await this.orm.cart.findUnique({
      where: { id },
      include: {
        cartItems: true,
      },
    });
  }

  async list(fields?: any): Promise<Cart[]> {
    fields = fields || {};
    const result = await this.orm.cart.findMany({
      where: fields,
      include: {
        cartItems: true,
      },
    });

    return result;
  }

  async update(basket: Cart): Promise<void> {
    
  }

  async delete(id: number): Promise<void> {
    await this.orm.cart.delete({ where: { id } });
  }
}
