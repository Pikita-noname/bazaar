import { AddUserDTO } from "../repository/DTOs/addUserDTO";

export interface IUserRepository {
  create(fields: AddUserDTO): Promise<void>;

  getAll(): Promise<any>;

  get(id: number): Promise<any>;
}
