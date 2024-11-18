import { Container } from "inversify";
import { UserService } from "./services/UserService";
import { UserController } from "./controllers/UserController";
import { IUserService } from "./interfaces/service/IUserService";
import UserRepository from "./repository/UserRepository";
import { IRepository } from "./interfaces/IRepository";
import { UserDTO } from "./repository/DTOs/UserDTO";
import { User } from "./models/User";
import { ProductService } from "./services/ProductService";
import { IProductService } from "./interfaces/service/IProductService";
import { Product } from "@prisma/client";
import { ProductDTO } from "./repository/DTOs/ProductDTO";
import ProductRepository from "./repository/ProductRepository";
import { ProductController } from "./controllers/ProductController";
import { ICartService } from "./interfaces/service/ICartService";
import { CartService } from "./services/CartService";
import { Cart } from "./models/Cart";
import { CartDTO } from "./repository/DTOs/CartDTO";
import CartRepository from "./repository/CartRepository";
import { CartController } from "./controllers/CartCotroller";
import { OrderController } from "./controllers/OrderCotroller";
import { IOrderService } from "./interfaces/service/IOrderService";
import { OrderService } from "./services/Order.Service";
import { Order } from "./models/Order";
import { OrderDTO } from "./repository/DTOs/OrderDTO";
import OrderRepository from "./repository/OrderRepository";

const container = new Container();

container.bind<IUserService>("UserService").to(UserService);

container.bind<IRepository<User, UserDTO>>("UserRepository").to(UserRepository);

container.bind<UserController>(UserController).toSelf();

container.bind<IProductService>("ProductService").to(ProductService);

container
  .bind<IRepository<Product, ProductDTO>>("ProductRepository")
  .to(ProductRepository);

container.bind<ProductController>(ProductController).toSelf();

container.bind<ICartService>("CartService").to(CartService);

container.bind<IRepository<Cart, CartDTO>>("CartRepository").to(CartRepository);

container.bind<CartController>(CartController).toSelf();

container.bind<OrderController>(OrderController).toSelf();

container.bind<IOrderService>("OrderService").to(OrderService);

container
  .bind<IRepository<Order, OrderDTO>>("OrderRepository")
  .to(OrderRepository);

export { container };
