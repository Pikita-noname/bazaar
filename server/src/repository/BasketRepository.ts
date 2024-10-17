import { injectable } from "inversify";
import Repository from "./Repository";
import { IBasketRepository } from "src/interfaces/repository/IBasketRepository";

@injectable()
export default class BasketRepository
  extends Repository
  implements IBasketRepository
{
  get() {
    throw new Error("Method not implemented.");
  }
  add() {
    throw new Error("Method not implemented.");
  }
  remove() {
    throw new Error("Method not implemented.");
  }
  delete() {
    throw new Error("Method not implemented.");
  }
}
