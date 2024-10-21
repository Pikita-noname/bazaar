import express, { Request, Response } from "express";

import { container } from "../inversify.config";
import { UserController } from "../controllers/UserController";
import { UserService } from "../services/UserService";
import UserRepository from "../repository/UserRepository";

const router = express.Router();

try {
  const controller = container.get<UserController>(UserController);

  router.get("/", (request: Request, response: Response) => {
    controller.getUsers(request, response);
  });
  router.get("/:id", (request: Request, response: Response) => {
    controller.getUser(request, response);
  });
  router.post("/", (request: Request, response: Response) => {
    controller.createUser(request, response);
  });
} catch (error) {
  console.error("Failed to retrieve UserController from the container:", error);
}

export default router;
