import { Injectable } from '@angular/core';
import { Genre } from '../models/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreDbService {
  key:string="genres"
  private genres!:Genre[]
  constructor() {
    this.genres =[
      new Genre(1,"роман","такое-то произведение"),
      new Genre(2,"повесть","такое-то произведение много го много букаф полилось из под пальцев потому что мыслитакое-то произведение много го много такое-то произведение много го много букаф полилось из под пальцев потому что мысли букаф полилось из под пальцев потому что мысли"),
      new Genre(3,"рассказ","такое-то произведение мысли так интерпретирует мозг..."),
      new Genre(4,"стихи","такое-то произведение или ето просто оправдание рукоблудия на клавиатуре"),
    ]
  }
  writeToLocalStorage(g: Genre[]){
    localStorage.setItem(this.key,JSON.stringify(g))
  }
  getFromLocalStorage():Genre[]{
    let test=localStorage.getItem(this.key)
    if(test){
      
      this.genres =(JSON.parse(test) as Genre[])
    } else{
      this.writeToLocalStorage(this.genres)
    }
    return this.genres
  }

  getAllGenres(): Genre[]{
    
    return this.getFromLocalStorage()
  }

  getGenreByID(id: number):Genre|null{
    
    for(let g of this.genres){
      if(g.id==id){
       return  g        
      }
    }
    return null
  }

  createGenre(g: Genre){
    g.id=this.creatorID()
    this.genres.push(g)
    this.writeToLocalStorage(this.genres)
  }

  updateGenre(genre: Genre){
    for(let g of this.genres){
      if(g.id==genre.id){
        g.name=genre.name,
        g.description= genre.description
      }
    }
    this.writeToLocalStorage(this.genres)
  }

  deleteGenre(id: number){
    let genres = this.getAllGenres()
    this.genres =genres.filter(g=>{
      return g.id!=id
    })
    this.writeToLocalStorage(this.genres)
  }

  creatorID():number{
    let id=1
    
    for(id;;id++){
      let check=0
      for(let g of this.genres){
        if(g.id==id){
          check=1
        }
        break
      }
      if(check==0){
        break
      }
    }
    
    return id
  }
  
}
