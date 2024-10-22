import { Container } from "inversify";
import { UserService } from "./services/UserService";
import { UserController } from "./controllers/UserController";
import { IUserService } from "./interfaces/service/IUserService";
import UserRepository from "./repository/UserRepository";
import { IRepository } from "./interfaces/IRepository";
import { AddUserDTO } from "./repository/DTOs/addUserDTO";
import { User } from "./models/User";

const container = new Container();

container.bind<IUserService>("IUserService").to(UserService);

container
  .bind<IRepository<User, AddUserDTO>>("UserRepository")
  .to(UserRepository);

container.bind<UserController>(UserController).toSelf();

export { container };
