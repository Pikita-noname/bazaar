import { Decimal } from "@prisma/client/runtime/library";

export class Product {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public price: Decimal,
    public imageUrl: string,
    public stock: number,
    public categoryId: number,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}
