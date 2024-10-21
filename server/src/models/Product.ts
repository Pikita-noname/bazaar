class Product {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public price: number,
    public imageUrl: string,
    public stock: number,
    public categoryId: number,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}
