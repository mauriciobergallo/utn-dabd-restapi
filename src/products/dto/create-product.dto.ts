import { CreateStockDto } from './create-stock.dto';

export class CreateProductDto {
  name: string;
  description: string;
  price: number;
  productType: string;
  timeFraction: number = 0;
  inventories: CreateStockDto[];
}
