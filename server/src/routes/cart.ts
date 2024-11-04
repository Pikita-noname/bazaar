import express, { Request, Response } from "express";
import { container } from "../inversify.config";
import { CartController } from "../controllers/CartCotroller";
import { validationMiddleware } from "../helpers/validationMiddleware";
import { CartDTO } from "../repository/DTOs/CartDTO";
import { CartItemDTO } from "../repository/DTOs/CartItemDTO";

let router = express.Router();

try {
  const controller = container.get<CartController>(CartController);

  router.get("/", (request: Request, response: Response) => {
    controller.get(request, response);
  });

  router.post(
    "/",
    validationMiddleware(CartDTO),
    (request: Request, response: Response) => {
      controller.create(request, response);
    }
  );

  router.delete("/", (request: Request, response: Response) => {
    response.send("by NDK1");
  });

  router.delete("/item", (request: Request, response: Response) => {
    controller.removeItem(request, response);
  });

  router.post(
    "/item",
    validationMiddleware(CartItemDTO),
    (request: Request, response: Response) => {
      controller.addItem(request, response);
    }
  );

  router.patch("/item", (request: Request, response: Response) => {
    controller.updateItem(request, response);
  });
} catch (error) {
  console.error("Failed to retrieve UserController from the container:", error);
}

export default router;
