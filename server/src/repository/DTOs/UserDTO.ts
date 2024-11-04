import { IsString, IsEnum, IsNotEmpty } from "class-validator";
import { UserRole } from "../../enums/userRoles";

export class UserDTO {
  @IsNotEmpty()
  @IsString()
  tg: string;

  @IsEnum(UserRole)
  role: UserRole = UserRole.CUSTOMER;

  constructor(data: Partial<UserDTO>) {
    Object.assign(this, data);
  }
}
