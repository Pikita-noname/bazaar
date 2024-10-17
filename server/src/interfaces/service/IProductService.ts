import { AddUserDTO } from "../../repository/DTOs/addUserDTO";

export interface IProductService {
  createUser(user: AddUserDTO): Promise<void>;
  getUser(id: number): Promise<any>;
  getUsers(): Promise<any>;
}
