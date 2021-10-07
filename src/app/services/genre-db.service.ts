import { Injectable } from '@angular/core';
import { Genre } from '../models/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreDbService {
  private genres!:Genre[]
  constructor() {
    this.genres =[
      new Genre(1,"роман","такое-то произведение"),
      new Genre(2,"повесть","такое-то произведение много го много букаф полилось из под пальцев потому что мыслитакое-то произведение много го много такое-то произведение много го много букаф полилось из под пальцев потому что мысли букаф полилось из под пальцев потому что мысли"),
      new Genre(3,"рассказ","такое-то произведение мысли так интерпретирует мозг..."),
      new Genre(4,"стихи","такое-то произведение или ето просто оправдание рукоблудия на клавиатуре"),
    ]
  }
  getAllGenres(){
    return this.genres
  }

  getGenreByID(id: number):Genre|undefined{
    
    for(let g of this.genres){
      if(g.id==id){
       return  g        
      }
    }
    return
  }

  createGenre(g: Genre){
    this.genres.push(g)
  }

  updateGenre(genre: Genre){
    for(let g of this.genres){
      if(g.id==genre.id){
        g.name=genre.name,
        g.description= genre.description
      }
    }
  }

  deleteGenre(id: number){
    let genres = this.getAllGenres()
    this.genres =genres.filter(g=>{
      return g.id!=id
    })
  }

  
}
