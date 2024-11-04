export interface IRepositoryItems<T, DTO> {
  createItem(DTO: DTO): Promise<void>;
  updateItem(model: T): Promise<void>;
  deleteItem(id: number): Promise<void>;
}
