import { Container } from "inversify";
import { UserService } from "./services/UserService";
import { UserController } from "./controllers/UserController";
import { IUserService } from "./interfaces/service/IUserService";
import { IUserRepository } from "./interfaces/repository/IUserRepository";
import UserRepository from "./repository/UserRepository";

const container = new Container();

container.bind<IUserService>("IUserService").to(UserService);

container.bind<IUserRepository>("IUserRepository").to(UserRepository);

container.bind<UserController>(UserController).toSelf();

export { container };
