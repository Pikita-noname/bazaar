import { inject, injectable } from "inversify";
import { IUserService } from "../interfaces/service/IUserService";
import { AddUserDTO } from "../repository/DTOs/addUserDTO";
import { User } from "src/models/User";
import { IRepository } from "src/interfaces/IRepository";

@injectable()
export class UserService implements IUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IRepository<User, AddUserDTO>
  ) {}

  public async createUser(fields: AddUserDTO): Promise<void> {
    return await this.userRepository.create(fields);
  }

  public async getUser(id: number): Promise<User> {
    return await this.userRepository.get(id);
  }

  public async getUsers(): Promise<User[]> {
    return await this.userRepository.list();
  }
}
