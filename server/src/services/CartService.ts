import { inject, injectable } from "inversify";
import { Cart } from "../models/Cart";
import { CartDTO } from "../repository/DTOs/CartDTO";
import { IRepository } from "../interfaces/IRepository";
import { ICartService } from "../interfaces/service/ICartService";
import { User } from "../models/User";
import { IRepositoryItems } from "../interfaces/IRepositoryItems";
import { CartItem } from "@prisma/client";

@injectable()
export class CartService implements ICartService {
  constructor(
    @inject("CartRepository")
    private cartRepository: IRepository<Cart, CartDTO> &
      IRepositoryItems<CartItem, CartItem>
  ) {}
  async removeCart(user: User): Promise<void> {
    const baskets = await this.cartRepository.list({ userId: user.id });

    baskets.forEach(async (basket) => {
      await this.cartRepository.delete(basket.id);
    });
  }
  async addProduct(product: CartItem) {
    await this.cartRepository.createItem(product);
  }
  async removeProduct(product: CartItem) {
    await this.cartRepository.deleteItem(product.id);
  }
  async updateProduct(product: CartItem) {
    await this.cartRepository.updateItem(product);
  }
  async getBaket(user: User): Promise<Cart> {
    return (await this.cartRepository.list({ userId: user.id }))[0];
  }

  async getAll(): Promise<Cart[]> {
    return await this.cartRepository.list();
  }

  async getById(id: number): Promise<Cart> {
    return await this.cartRepository.get(id);
  }

  async delete(id: number): Promise<void> {
    await this.cartRepository.delete(id);
  }

  async create(DTO: CartDTO): Promise<void> {
    await this.cartRepository.create(DTO);
  }

  async update(cart: Cart): Promise<void> {
    await this.cartRepository.update(cart);
  }
}
