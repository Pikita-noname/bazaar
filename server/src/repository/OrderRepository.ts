import { IOrderRepository } from "src/interfaces/repository/IOrderRepository";
import Repository from "./Repository";
import { injectable } from "inversify";

@injectable()
export default class OrderRepository
  extends Repository
  implements IOrderRepository
{
  create() {
    throw new Error("Method not implemented.");
  }
  changeStatus() {
    throw new Error("Method not implemented.");
  }
  get() {
    throw new Error("Method not implemented.");
  }
  all() {
    throw new Error("Method not implemented.");
  }
}
