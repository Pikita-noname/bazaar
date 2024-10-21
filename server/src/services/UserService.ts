import { inject, injectable } from "inversify";
import { IUserRepository } from "../interfaces/repository/IUserRepository";
import { IUserService } from "../interfaces/service/IUserService";
import { AddUserDTO } from "../repository/DTOs/addUserDTO";
import UserRepository from "../repository/UserRepository";
import { User } from "src/models/User";

@injectable()
export class UserService implements IUserService {
  constructor(
    @inject("IUserRepository") private userRepository: IUserRepository
  ) {}

  public async createUser(fields: AddUserDTO): Promise<void> {
    return await this.userRepository.create(fields);
  }

  public async getUser(id: number): Promise<User> {
    return await this.userRepository.get(id);
  }

  public async getUsers(): Promise<User[]> {
    return await this.userRepository.all();
  }
}
