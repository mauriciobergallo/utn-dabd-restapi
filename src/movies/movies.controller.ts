import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('api/movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Get()
  findAll() {
    return this.moviesService.findAll();
  }

  @Get(':href')
  findOne(@Param('href') href: string) {
    return this.moviesService.findOneByHref(href);
  }

  @Put(':href')
  update(@Param('href') href: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.moviesService.update(href, updateMovieDto);
  }

  @Delete(':href')
  remove(@Param('href') href: string) {
    return this.moviesService.remove(href);
  }
}
