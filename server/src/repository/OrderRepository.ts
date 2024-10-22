import { IRepository } from "src/interfaces/IRepository";
import Repository from "./Repository";
import { injectable } from "inversify";
import { $Enums, Order } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { OrderDTO } from "./DTOs/OrderDTO";

@injectable()
export default class OrderRepository
  extends Repository
  implements IRepository<Order, OrderDTO>
{
  create(DTO: OrderDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }
  get(id: number): Promise<Order> {
    throw new Error("Method not implemented.");
  }
  list(fields?: any): Promise<Order[]> {
    throw new Error("Method not implemented.");
  }
  update(DTO: OrderDTO, id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
