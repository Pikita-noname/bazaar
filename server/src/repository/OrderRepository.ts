import { IRepository } from "src/interfaces/IRepository";
import Repository from "./Repository";
import { injectable } from "inversify";
import { $Enums } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { OrderDTO } from "./DTOs/OrderDTO";
import { Order } from "../models/Order";

@injectable()
export default class OrderRepository
  extends Repository
  implements IRepository<Order, OrderDTO>
{
  async create(DTO: OrderDTO): Promise<void> {
    await this.orm.order.create({
      data: {
        ...DTO,
        orderItems: {
          create: DTO.orderItems,
        },
      },
    });
  }

  async get(id: number): Promise<Order> {
    return this.orm.order.findUnique({where: {id}});
  }
  
  async list(fields?: any): Promise<Order[]> {
    fields = fields || {};
    return this.orm.order.findMany({where: fields});
  }

  async update(model: Order): Promise<void> {
    this.orm.order.update({
      data: model,
      where: { id: model.id },
    });
  }

  async delete(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
