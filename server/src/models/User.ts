import { $Enums } from "@prisma/client";

export class User {
  constructor(
    public id: number,
    public tg: string,
    public createdAt: Date,
    public updatedAt: Date,
    public role: $Enums.UserRole
  ) {}
}
