import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

import * as moviesData from './../../mocked-data/2020-movies.json';

@Injectable()
export class MoviesService implements OnModuleInit {
  private _movies: Movie[];

  onModuleInit() {
    this._movies = moviesData.map((x) => {
      return {
        href: x.href,
        title: x.title,
        year: x.year,
        cast: x.cast,
        genres: x.genres,
        extract: x.extract,
        thumbnail: x.thumbnail,
        thumbnailWidth: x.thumbnail_width,
        thumbnailHeight: x.thumbnail_height,
      } as Movie;
    });
  }

  create(createMovieDto: CreateMovieDto) {
    console.log(createMovieDto);
    return 'This action adds a new movie';
  }

  findAll() {
    return this._movies;
  }

  findOneByTitle(title: string) {
    const moviesFound = this._movies.filter((x) => x.title === title);
    return moviesFound;
  }

  findOneByHref(href: string) {
    const moviesFound = this._movies.filter((x) => x.href === href);
    return moviesFound;
  }

  update(href: string, updateMovieDto: UpdateMovieDto) {
    const updatedMovie = updateMovieDto as Movie;
    const movieToUpdateIdx = this._movies.findIndex((x) => x.href === href);
    if (movieToUpdateIdx >= 0) {
      this._movies[movieToUpdateIdx] = updatedMovie;
    }
  }

  remove(href: string) {
    const movieToDeleteIdx = this._movies.findIndex((x) => x.href === href);
    if (movieToDeleteIdx >= 0) {
      console.log('Movie to remove', movieToDeleteIdx);
      this._movies.splice(movieToDeleteIdx, 1);
      console.log('Movies after deletion', this._movies);
    }
  }
}
