import { Injectable } from '@angular/core';
import { Author } from '../models/author';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class AuthorsDbService {
  authors: Author[]=[]
  key: string= "author"
  constructor() {
    this.authors=[
      new Author(1,"Александр","Пушкин",'1799-06-06',
      [
        new Book(1,"Дубровский",200,"роман"),
        new Book(2,"Пиковая дама",20,"рассказ"),
        new Book(3,"Кирджали",10,"повесть"),
        new Book(4,"Египетские ночи",20,"повесть"),
        new Book(5,"Капитанская дочь",150,"роман"),
      ],"Сергеевич"),
      new Author(2,"Иван","Тургеньев",'1818-11-09',
      [
        new Book(1,"Муму", 220,"рассказ"),
      ],"Сергеевич"),
      new Author(3,"Тарас","Шевченко",'1814-03-09',
      [
        new Book(1,"Кобзарь", 220,"лирическое стихотворение"),
        new Book(2,"Художник", 20,"повесть"),
      ],"Григорьевич"),
    ]
  }

  saveAllAuthors(a: Author[]){
    localStorage.setItem(this.key,JSON.stringify(a))
  }
  getFromLocalStorage(){
    let test =localStorage.getItem(this.key)
    if(test!=null){
      this.authors=JSON.parse(test)
    }else{
      this.saveAllAuthors(this.authors)
    }
  }

  getAllAuthor(){
    this.getFromLocalStorage()
    return this.authors
  }

  getAuthorByID(id: number): Author|undefined{
    this.getFromLocalStorage()
    for(let a of this.authors){
      if(a.id==id){
        return a
      }
    }
    return
  }

  createAuthor(a: Author){
    a.id = this.creatorID()
    this.authors.push(a)
    this.saveAllAuthors(this.authors)
  }

  updateAuthor(auth:Author){
    this.getFromLocalStorage()
    for(let a of this.authors){
      if(a.id==auth.id){
        a.firstName=auth.firstName
        a.surname=auth.surname
        a.patronymic=auth.patronymic
        a.bithDate=auth.bithDate
        a.books=auth.books
        this.saveAllAuthors(this.authors)  
        break
      }
    }
  }

  deleteAuthor(id:number){
    this.getFromLocalStorage()
    this.authors=this.authors.filter(res=>{
      return res.id!=id
    })
  }

  private creatorID():number{
    let id=1
    
    for(id;;id++){
      let check=0
      for(let a of this.authors){
        if(a.id==id){
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
