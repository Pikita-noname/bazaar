export interface IOrderRepository {
  create();
  changeStatus();
  get();
  all();
}
