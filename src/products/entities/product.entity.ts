import { Stock } from './stock.entity';

export class Product {
  id: number;
  name: string;
  description: string;
  nameEncoded: string;
  price: number;
  inventories: Stock[];
}
