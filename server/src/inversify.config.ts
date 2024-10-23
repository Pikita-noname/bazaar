import { Container } from "inversify";
import { UserService } from "./services/UserService";
import { UserController } from "./controllers/UserController";
import { IUserService } from "./interfaces/service/IUserService";
import UserRepository from "./repository/UserRepository";
import { IRepository } from "./interfaces/IRepository";
import { AddUserDTO } from "./repository/DTOs/addUserDTO";
import { User } from "./models/User";
import { ProductService } from "./services/ProductService";
import { IProductService } from "./interfaces/service/IProductService";
import { Product } from "@prisma/client";
import { ProductDTO } from "./repository/DTOs/ProductDTO";
import ProductRepository from "./repository/ProductRepository";
import { ProductController } from "./controllers/ProductController";

const container = new Container();

container.bind<IUserService>("IUserService").to(UserService);

container
  .bind<IRepository<User, AddUserDTO>>("UserRepository")
  .to(UserRepository);

container.bind<UserController>(UserController).toSelf();

container.bind<IProductService>("ProductService").to(ProductService);

container
  .bind<IRepository<Product, ProductDTO>>("ProductRepository")
  .to(ProductRepository);

container.bind<ProductController>(ProductController).toSelf();

export { container };
