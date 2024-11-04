import {
  IsString,
  IsEnum,
  IsInt,
  IsPositive,
  IsNumber,
  IsUrl,
} from "class-validator";

export class ProductDTO {
  @IsString()
  public name: string;

  @IsString()
  public description: string;

  @IsNumber()
  @IsPositive()
  public price: number;

  @IsUrl()
  public imageUrl: string;

  @IsInt()
  @IsPositive()
  public stock: number;

  @IsInt()
  @IsPositive()
  public categoryId: number;

  constructor(data: Partial<ProductDTO>) {
    Object.assign(this, data);
  }
}
