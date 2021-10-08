import { Injectable } from '@angular/core';
import { Author } from '../models/author';
import { Book, BookUpd } from '../models/book';
import { AuthorsCrudService } from './authors-crud.service';

@Injectable({
  providedIn: 'root'
})
export class BooksDbService {
  allBooks: BookUpd[]=[]
  bookForUpdate!: BookUpd
  constructor(
    private authorService: AuthorsCrudService
  ) { }

  getAllBooks(){  
    this.allBooks=[]
    let authors =this.authorService.getAllAuthor()
      for(let a of authors){
        this.allBooks.push(new BookUpd(a.id,a.books))
      }
    
    
    return this.allBooks
  }

  getBookByID(authId: number,bookId: number){
    
  }

  getBookByName(){

  }

  createBook(){

  }

  updateBook(){

  }

  deleteBook(){

  }
}
