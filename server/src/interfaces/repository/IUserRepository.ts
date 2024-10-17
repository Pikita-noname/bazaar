import { AddUserDTO } from "../../repository/DTOs/addUserDTO";

export interface IUserRepository {
  create(fields: AddUserDTO): Promise<void>;

  all(): Promise<any>;

  get(id: number): Promise<any>;
}
