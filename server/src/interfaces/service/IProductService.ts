import { ProductDTO } from "src/repository/DTOs/ProductDTO";
import { UserDTO } from "../../repository/DTOs/UserDTO";
import { IService } from "./IService";
import { Product } from "src/models/Product";

export interface IProductService extends IService<Product, ProductDTO> {}
