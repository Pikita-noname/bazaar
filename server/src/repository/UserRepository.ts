import { UserDTO } from "./DTOs/UserDTO";
import { injectable } from "inversify";
import Repository from "./Repository";
import { User } from "../models/User";
import { IRepository } from "src/interfaces/IRepository";

@injectable()
export default class UserRepository
  extends Repository
  implements IRepository<User, UserDTO>
{
  update(user: User): Promise<void> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
  public async create(fields: UserDTO): Promise<void> {
    await this.orm.user.create({ data: fields });
  }

  public async get(id: number): Promise<User | null> {
    const user = await this.orm.user.findUnique({ where: { id } });

    return user;
  }

  public async list(fields?: any): Promise<User[]> {
    fields = fields || {};
    const users = await this.orm.user.findMany({ where: fields });

    return users;
  }
}
