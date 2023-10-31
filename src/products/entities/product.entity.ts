import { Stock } from './stock.entity';

export class Product {
  id: number;
  name: string;
  description: string;
  nameEncoded: string;
  price: number;
  productType: string;
  timeFraction: number = 0;
  inventories: Stock[];
}
