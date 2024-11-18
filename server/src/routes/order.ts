import express, { Request, Response } from "express";
import { container } from "../inversify.config";
import { OrderController } from "../controllers/OrderCotroller";

let router = express.Router();

try {
  const controller = container.get<OrderController>(OrderController);

  router.get("/", (request: Request, response: Response) => {
    response.send("by NDK");
  });
  router.get("/:orderId", (request: Request, response: Response) => {
    response.send("by NDK");
  });
  router.post("/", (request: Request, response: Response) => {
    controller.createOrder(request, response);
  });
  router.post("/:productId", (request: Request, response: Response) => {
    response.send("by NDK");
  });
  router.patch("/:productId", (request: Request, response: Response) => {
    response.send("by NDK");
  });
  router.delete("/", (request: Request, response: Response) => {
    response.send("by NDK");
  });
  router.delete("/:productId", (request: Request, response: Response) => {
    response.send("by NDK");
  });
} catch (error) {
  console.error("Failed to retrieve UserController from the container:", error);
}

export default router;
