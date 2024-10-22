import { injectable } from "inversify";
import Repository from "./Repository";
import { IRepository } from "src/interfaces/IRepository";
import { Basket } from "src/models/Basket";
import { BasketDTO } from "./DTOs/BasketDTO";

@injectable()
export default class BasketRepository
  extends Repository
  implements IRepository<Basket, BasketDTO>
{
  create(DTO: BasketDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }
  get(id: number): Promise<Basket> {
    throw new Error("Method not implemented.");
  }
  list(fields?: any): Promise<Basket[]> {
    throw new Error("Method not implemented.");
  }
  update(DTO: BasketDTO, id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
