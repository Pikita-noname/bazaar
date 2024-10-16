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

      await this.userService.createUser(new AddUserDTO(tg, UserRole.CUSTOMER));
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

      await this.userService.getUser(id);
    } catch (error) {
      console.error("Error get user:", error);
      response.status(500).json({ message: "Unable to get user." });
    }
  }

  public async getUsers(request: Request, response: Response) {
    try {
      await this.userService.getUsers();
    } catch (error) {}
  }
}
