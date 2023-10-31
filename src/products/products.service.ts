import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { Stock } from './entities/stock.entity';

@Injectable()
export class ProductsService {
  private _products: Product[];

  constructor() {
    this._products = [];
  }

  create(createProductDto: CreateProductDto) {
    const maxId = this._products.length + 1;
    const newProduct: Product = new Product();
    newProduct.id = maxId;
    newProduct.name = createProductDto.name;
    newProduct.nameEncoded = encodeURIComponent(
      newProduct.name.toLocaleLowerCase(),
    );
    newProduct.description = createProductDto.description;

    newProduct.inventories = [];

    newProduct.productType = createProductDto.productType.trim();

    if (newProduct.productType === 'Producto') {
      let maxInventoryId = 0;

      for (let i = 0; i < createProductDto.inventories.length; i++) {
        maxInventoryId++;

        const inventory = createProductDto.inventories[i];
        const newInventory: Stock = new Stock();
        newInventory.id = maxInventoryId;
        newInventory.location = inventory.location;
        newInventory.count = inventory.count;

        newProduct.inventories.push(newInventory);
      }
    } else {
      newProduct.timeFraction = createProductDto.timeFraction;
    }

    this._products.push(newProduct);

    return newProduct;
  }

  getProductByNameEncoded(name: string): Product {
    const filteredProducts = this._products.filter(
      (x) => x.nameEncoded === name,
    );

    if (filteredProducts.length > 0) {
      return filteredProducts[0];
    } else {
      return {} as Product;
    }
  }
}
