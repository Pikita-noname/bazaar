import { IsString, IsEnum, IsNotEmpty, IsNumber } from "class-validator";
import { UserRole } from "../../enums/userRoles";

export class UserDTO {
  @IsNotEmpty()
  @IsNumber()
  tgId: number;

  @IsNotEmpty()
  @IsString()
  name: string
  @IsNotEmpty()
  @IsString()
  username: string

  @IsEnum(UserRole)
  role: UserRole = UserRole.CUSTOMER;

  constructor(data: Partial<UserDTO>) {
    Object.assign(this, data);
  }
}
