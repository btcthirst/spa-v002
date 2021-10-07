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

  getAll(){
    return this.genreDB.getAllGenres()
  }

  getByID(id: number){
    this.genreDB.getGenreByID(id)
  }

  create(g: Genre){
    this.genreDB.createGenre(g)
  }

  update(g: Genre){
    this.genreDB.updateGenre(g)
  }

  delete(id:number){
    console.log("deleted")
    this.genreDB.deleteGenre(id)
  }
}
