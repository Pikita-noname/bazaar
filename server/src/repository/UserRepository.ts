import { PrismaClient } from "@prisma/client";
import { AddUserDTO } from "./DTOs/addUserDTO";
import { IUserRepository } from "../interfaces/IUserRepository";
import { injectable } from "inversify";

@injectable()
export default class UserRepository implements IUserRepository {
  private prisma: PrismaClient = new PrismaClient();

  public async create(fields: AddUserDTO): Promise<void> {
    await this.prisma.user.create({ data: fields });
  }

  public async getAll(): Promise<any> {
    try {
      const users = await this.prisma.user.findMany();
      return users;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw new Error("Unable to fetch users");
    }
  }

  public async get(id: number): Promise<any> {
    try {
      const user = await this.prisma.user.findUnique({ where: { id } });
      return user;
    } catch (error) {
      console.error(`Error fetching user with id ${id}:`, error);
      throw new Error(`Unable to fetch user with id ${id}`);
    }
  }
}
