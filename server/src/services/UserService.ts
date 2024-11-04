import { inject, injectable } from "inversify";
import { IUserService } from "../interfaces/service/IUserService";
import { UserDTO } from "../repository/DTOs/UserDTO";
import { User } from "src/models/User";
import { IRepository } from "src/interfaces/IRepository";

@injectable()
export class UserService implements IUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IRepository<User, UserDTO>
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
  async create(DTO: UserDTO): Promise<void> {
    await this.userRepository.create(DTO);
  }
  update(user: User): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
