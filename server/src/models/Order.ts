class Order {
  constructor(
    public id: number,
    public userId: number,
    public totalPrice: number,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}
