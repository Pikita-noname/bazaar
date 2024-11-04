import { User } from "src/models/User";
import { UserDTO } from "../../repository/DTOs/UserDTO";
import { IService } from "./IService";

export interface IUserService extends IService<User, UserDTO> {}
