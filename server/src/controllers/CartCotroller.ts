import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { ICartService } from "../interfaces/service/ICartService";
import { CartDTO } from "../repository/DTOs/CartDTO";
import { IUserService } from "../interfaces/service/IUserService";
import { CartItemDTO } from "../repository/DTOs/CartItemDTO";
import { CartItem } from "../models/CartItem";

@injectable()
export class CartController {
  constructor(
    @inject("CartService") private cartService: ICartService,
    @inject("UserService") private userService: IUserService
  ) {}

  async create(request: Request, response: Response): Promise<Response> {
    const cart = new CartDTO(request.body);

    try {
      await this.cartService.create(cart);
      return response.status(200).send();
    } catch (error) {
      console.error("Error creating cart:", error);
      response.status(500).json({ message: "Unable to create cart." });
    }
  }

  async get(request: Request, response: Response): Promise<Response> {
    const id = parseInt(request.query.id as string);

    if (!id) {
      return response.status(400).json({ message: "id must be a number" });
    }

    try {
      const user = await this.userService.getById(id);
      const result = await this.cartService.getBaket(user);

      return response.status(200).json(result);
    } catch (error) {
      console.error("Error get basket:", error);
      response.status(500).json({ message: "Unable to get basket." });
    }
  }

  async getAll(request: Request, response: Response): Promise<Response> {
    const result = await this.cartService.getAll();

    return response.json(result);
  }

  async addItem(request: Request, response: Response): Promise<Response> {
    const item: CartItemDTO = new CartItemDTO(request.body);

    try {
      await this.cartService.addProduct(item);
      return response.status(200).send();
    } catch (error) {
      console.error("Error add cartItem:", error);
      response.status(500).json({ message: "Unable to add cartItem." });
    }
  }
  async updateItem(request: Request, response: Response): Promise<Response> {
    const item: CartItem = new CartItem(request.body);

    try {
      await this.cartService.updateProduct(item);
      return response.status(200).send();
    } catch (error) {
      console.error("Error add cartItem:", error);
      response.status(500).json({ message: "Unable to add cartItem." });
    }
  }
  async removeItem(request: Request, response: Response): Promise<Response> {
    const item: CartItem = new CartItem(request.body);

    try {
      await this.cartService.removeProduct(item);
      return response.status(200).send();
    } catch (error) {
      console.error("Error delete cartItem:", error);
      response.status(500).json({ message: "Unable to delete cartItem." });
    }
  }
}
