import { UserRole } from "../enums/userRoles";

export class AddUserDTO {
  tg: string;
  role: UserRole;
  constructor(tg: string, role: UserRole) {
    this.tg = tg;
    this.role = role;
  }
}
