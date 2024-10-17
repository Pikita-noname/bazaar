import { AddUserDTO } from "./DTOs/addUserDTO";
import { IUserRepository } from "../interfaces/repository/IUserRepository";
import { injectable } from "inversify";
import Repository from "./Repository";

@injectable()
export default class UserRepository
  extends Repository
  implements IUserRepository
{
  public async create(fields: AddUserDTO): Promise<void> {
    await this.orm.user.create({ data: fields });
  }

  public async all(): Promise<any> {
    const users = await this.orm.user.findMany();
    return users;
  }

  public async get(id: number): Promise<any> {
    const user = await this.orm.user.findUnique({ where: { id } });
    return user;
  }
}
