import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';

@Controller('api/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get(':name')
  getByName(@Param('name') name: string) {
    const encodedName = encodeURIComponent(name.toLocaleLowerCase());
    return this.productsService.getProductByNameEncoded(encodedName);
  }
}
