import { injectable } from "inversify";
import Repository from "./Repository";
import { IProductRepository } from "src/interfaces/repository/IProductRepository";

@injectable()
export default class ProductRepository
  extends Repository
  implements IProductRepository
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
  all() {
    throw new Error("Method not implemented.");
  }
}
