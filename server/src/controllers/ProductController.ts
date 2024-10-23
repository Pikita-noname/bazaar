import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { IProductService } from "../interfaces/service/IProductService";
import { ProductDTO } from "../repository/DTOs/ProductDTO";

@injectable()
export class ProductController {
  constructor(@inject("ProductService") private userService: IProductService) {}

  async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    await this.userService.create(
      new ProductDTO(
        data.name,
        data.description,
        data.price,
        data.imageUrl,
        data.stock,
        data.categoryId
      )
    );

    return response.status(200);
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
