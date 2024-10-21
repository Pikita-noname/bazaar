import { User } from "src/models/User";
import { AddUserDTO } from "../../repository/DTOs/addUserDTO";

export interface IUserService {
  createUser(user: AddUserDTO): Promise<void>;
  getUser(id: number): Promise<User>;
  getUsers(): Promise<User[]>;
}
