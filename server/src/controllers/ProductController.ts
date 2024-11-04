import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { IProductService } from "../interfaces/service/IProductService";
import { ProductDTO } from "../repository/DTOs/ProductDTO";

@injectable()
export class ProductController {
  constructor(@inject("ProductService") private userService: IProductService) {}

  async create(request: Request, response: Response): Promise<Response> {
    const product = new ProductDTO(request.body);

    try {
      await this.userService.create(product);
      return response.status(200).send();
    } catch (error) {
      console.error("Error creating product:", error);
      response.status(500).json({ message: "Unable to create product." });
    }
  }

  async get(request: Request, response: Response): Promise<Response> {
    const id = parseInt(request.params.id);

    if (!id) {
      return response.status(400).json({ message: "id must be a number" });
    }

    const result = await this.userService.getById(id);

    return response.status(200).json(result);
  }

  async getAll(request: Request, response: Response): Promise<Response> {
    const result = await this.userService.getAll();

    return response.json(result);
  }
}
