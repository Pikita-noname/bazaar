import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { IOrderService } from "../interfaces/service/IOrderService";

@injectable()
export class OrderController {
  constructor(@inject("OrderService") private orderService: IOrderService) {}

  public async createOrder(request: Request, response: Response) {
    try {
      const id = parseInt(request.body.id as string);

      if (!id) {
        return response.status(400).json({ message: "id must be a number" });
      }

      await this.orderService.createFromCart(id);
      response.status(200).send();
    } catch (error) {
      console.error("Error creating order:", error);
      response.status(500).json({ message: "Unable to create order." });
    }
  }

  public async getOrders(request: Request, response: Response) {
    try {
      const id = parseInt(request.query.id as string);

      if (!id) {
        return response.status(400).json({ message: "id must be a number" });
      }

      const user = await this.orderService.getOrdersByUser(id);
      response.status(200).json(user);
    } catch (error) {
      console.error("Error get orders to user:", error);
      response.status(500).json({ message: "Unable to get orders to user." });
    }
  }
}
