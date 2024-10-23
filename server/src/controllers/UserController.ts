import express, { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { AddUserDTO } from "../repository/DTOs/addUserDTO";
import { IUserService } from "../interfaces/service/IUserService";
import { UserRole } from "../enums/userRoles";

@injectable()
export class UserController {
  constructor(@inject("IUserService") private userService: IUserService) {}

  public async createUser(request: Request, response: Response) {
    try {
      const { tg } = request.body;

      if (!tg) {
        return response
          .status(400)
          .json({ message: "Telegram username is required." });
      }

      await this.userService.create(new AddUserDTO(tg, UserRole.CUSTOMER));
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
