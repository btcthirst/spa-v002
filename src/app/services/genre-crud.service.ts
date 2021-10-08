import { Injectable } from '@angular/core';
import { Genre } from '../models/genre';
import { GenreDbService } from './genre-db.service';

@Injectable({
  providedIn: 'root'
})
export class GenreCrudService {

  constructor(
    private genreDB: GenreDbService
  ) { }

  getAllGenres(){
    return this.genreDB.getAllGenres()
  }

  getGenreByID(id: number){
    this.genreDB.getGenreByID(id)
  }

  createGenre(g: Genre){
    this.genreDB.createGenre(g)
  }

  updateGenre(g: Genre){
    this.genreDB.updateGenre(g)
  }

  deleteGenre(id:number){
    console.log("deleted")
    this.genreDB.deleteGenre(id)
  }
}
