import { inject, injectable } from "inversify";
import { IRepository } from "src/interfaces/IRepository";
import { IProductService } from "src/interfaces/service/IProductService";
import { Product } from "src/models/Product";
import { ProductDTO } from "src/repository/DTOs/ProductDTO";

@injectable()
export class ProductService implements IProductService {
  constructor(
    @inject("ProductRepository")
    private productRepository: IRepository<Product, ProductDTO>
  ) {}
  async getAll(): Promise<Product[]> {
    return await this.productRepository.list();
  }
  async getById(id: number): Promise<Product> {
    return await this.productRepository.get(id);
  }
  async delete(id: number): Promise<void> {
    return await this.productRepository.delete(id);
  }
  async create(DTO: ProductDTO): Promise<void> {
    return await this.productRepository.create(DTO);
  }
  async update(product: Product): Promise<void> {
    return await this.productRepository.update(product);
  }
}
