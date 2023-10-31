import { CreateStockDto } from './create-stock.dto';

export class CreateProductDto {
  name: string;
  description: string;
  price: number;
  inventories: CreateStockDto[];
}
