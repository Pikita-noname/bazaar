import { $Enums } from "@prisma/client";
import { UserRole } from "../enums/userRoles";

export class User {
  constructor(
    public id: number,
    public tg: string,
    public createdAt: Date,
    public updatedAt: Date,
    public role: $Enums.UserRole
  ) {}
}
