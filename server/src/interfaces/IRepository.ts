export interface IRepository<T, DTO> {
  create(DTO: DTO): Promise<void>;
  get(id: number): Promise<T>;
  list(fields?: any): Promise<T[]>;
  update(DTO: DTO, id: number): Promise<void>;
  delete(id: number): Promise<void>;
}
