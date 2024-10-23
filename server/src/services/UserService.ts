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
  async getAll(): Promise<User[]> {
    return await this.userRepository.list();
  }
  async getById(id: number): Promise<User> {
    return await this.userRepository.get(id);
  }
  delete(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async create(DTO: AddUserDTO): Promise<void> {
    await this.userRepository.create(DTO);
  }
  update(id: number, DTO: AddUserDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
