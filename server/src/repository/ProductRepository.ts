import { injectable } from "inversify";
import Repository from "./Repository";
import { Product } from "../models/Product";
import { ProductDTO } from "./DTOs/ProductDTO";
import { IRepository } from "../interfaces/IRepository";

@injectable()
export default class ProductRepository
  extends Repository
  implements IRepository<Product, ProductDTO>
{
  async update(DTO: ProductDTO, id: number): Promise<void> {
    await this.orm.product.update({
      data: DTO,
      where: { id },
    });
  }
  async create(DTO: ProductDTO): Promise<void> {
    await this.orm.product.create({ data: DTO });
  }

  async get(id: number) {
    const product = await this.orm.product.findUnique({ where: { id } });

    return new Product(
      product.id,
      product.name,
      product.description,
      product.price,
      product.imageUrl,
      product.stock,
      product.categoryId,
      product.createdAt,
      product.updatedAt
    );
  }

  async delete(id: number): Promise<void> {
    await this.orm.product.delete({ where: { id } });
  }

  async list(fields?: any): Promise<Product[]> {
    fields = fields || {};
    const products = await this.orm.product.findMany({ where: fields });

    return products.map((product) => {
      return new Product(
        product.id,
        product.name,
        product.description,
        product.price,
        product.imageUrl,
        product.stock,
        product.categoryId,
        product.createdAt,
        product.updatedAt
      );
    });
  }
}
