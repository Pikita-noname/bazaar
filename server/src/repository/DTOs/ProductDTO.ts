export class ProductDTO {
  constructor(
    public name: string,
    public description: string,
    public price: number,
    public imageUrl: string,
    public stock: number,
    public categoryId: number
  ) {}
}