import express, { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { UserDTO } from "../repository/DTOs/UserDTO";
import { IUserService } from "../interfaces/service/IUserService";
import { UserRole } from "../enums/userRoles";

@injectable()
export class UserController {
  constructor(@inject("UserService") private userService: IUserService) {}

  public async createUser(request: Request, response: Response) {
    try {
      await this.userService.create(new UserDTO(request.body));
      response.status(200).send();
    } catch (error) {
      console.error("Error creating user:", error);
      response.status(500).json({ message: "Unable to create user." });
    }
  }

  public async getUser(request: Request, response: Response) {
    try {
      const id = parseInt(request.params.id);

      if (!id) {
        return response.status(400).json({ message: "id must be a number" });
      }

      const user = await this.userService.getById(id);
      response.status(200).json(user);
    } catch (error) {
      console.error("Error get user:", error);
      response.status(500).json({ message: "Unable to get user." });
    }
  }

  public async getUsers(request: Request, response: Response) {
    try {
      const users = await this.userService.getAll();
      response.status(200).json(users);
    } catch (error) {
      console.error("Error get users:", error);
      response.status(500).json({ message: "Unable to get users." });
    }
  }
}
