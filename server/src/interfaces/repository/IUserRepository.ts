import { User } from "src/models/User";
import { AddUserDTO } from "../../repository/DTOs/addUserDTO";

export interface IUserRepository {
  create(fields: AddUserDTO): Promise<void>;

  all(): Promise<User[]>;

  get(id: number): Promise<User>;
}
