import { ProductDTO } from "src/repository/DTOs/ProductDTO";
import { AddUserDTO } from "../../repository/DTOs/addUserDTO";
import { IService } from "./IService";
import { Product } from "src/models/Product";

export interface IProductService extends IService<Product, ProductDTO> {}
