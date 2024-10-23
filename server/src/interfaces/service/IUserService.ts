import { User } from "src/models/User";
import { AddUserDTO } from "../../repository/DTOs/addUserDTO";
import { IService } from "./IService";

export interface IUserService extends IService<User, AddUserDTO> {}
