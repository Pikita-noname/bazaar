import { AddUserDTO } from "./DTOs/addUserDTO";
import { IUserRepository } from "../interfaces/repository/IUserRepository";
import { injectable } from "inversify";
import Repository from "./Repository";
import { User } from "../models/User";

@injectable()
export default class UserRepository
  extends Repository
  implements IUserRepository
{
  public async create(fields: AddUserDTO): Promise<void> {
    await this.orm.user.create({ data: fields });
  }

  public async all(): Promise<User[]> {
    const users = await this.orm.user.findMany();
    return users;
  }

  public async get(id: number): Promise<User> {
    const user = await this.orm.user.findUnique({ where: { id } });

    const result = new User(
      user.id,
      user.tg,
      user.createdAt,
      user.updatedAt,
      user.role
    );

    return user;
  }

  public async list(fields: any): Promise<User[]> {
    const user = await this.orm.user.findMany({ where: fields });

    return user;
  }
}
