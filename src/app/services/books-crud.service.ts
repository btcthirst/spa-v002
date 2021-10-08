import { Injectable } from '@angular/core';
import { BooksDbService } from './books-db.service';

@Injectable({
  providedIn: 'root'
})
export class BooksCrudService {

  constructor(
    private dbService: BooksDbService
  ) { }

  getAllBooks(){
    return this.dbService.getAllBooks()
  }

  getBookByID(){
    /* this.dbService.getBookByID() */
  }

  getBookByName(){
    this.dbService.getBookByName()
  }

  createBook(){
    this.dbService.createBook()
  }

  updateBook(){
    this.dbService.updateBook()
  }

  deleteBook(){
    this.dbService.deleteBook()
  }
}
