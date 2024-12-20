export interface IService<T, TDTO> {
  getAll(): Promise<T[] | null>;
  getById(id: number): Promise<T | null>;
  delete(id: number): Promise<void>;
  create(DTO: TDTO): Promise<void>;
  update(model: T): Promise<void>;
}
