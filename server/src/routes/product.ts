import express, { Request, Response } from "express";
import { ProductController } from "../controllers/ProductController";
import { container } from "../inversify.config";
import { validationMiddleware } from "../helpers/validationMiddleware";
import { ProductDTO } from "../repository/DTOs/ProductDTO";

let router = express.Router();

try {
  const controller = container.get<ProductController>(ProductController);

  router.get("/", (request: Request, response: Response) => {
    controller.getAll(request, response);
  });
  router.get("/:productId", (request: Request, response: Response) => {
    controller.get(request, response);
  });
  router.post(
    "/",
    validationMiddleware(ProductDTO),
    (request: Request, response: Response) => {
      controller.create(request, response);
    }
  );
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
