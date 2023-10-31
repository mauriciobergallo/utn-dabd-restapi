import { Module } from '@nestjs/common';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';
import { MoviesService } from './movies/movies.service';
import { MoviesController } from './movies/movies.controller';

@Module({
  imports: [],
  controllers: [ProductsController, MoviesController],
  providers: [ProductsService, MoviesService],
})
export class AppModule {}
