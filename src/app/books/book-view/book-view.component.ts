import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book, BookUpd } from 'src/app/models/book';
import { AuthorsCrudService } from 'src/app/services/authors-crud.service';
import { BooksCrudService } from 'src/app/services/books-crud.service';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {
  books: BookUpd[] =[]
  constructor(
    private bookService:BooksCrudService,
    private authorService: AuthorsCrudService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getBooks()
  }

  getBooks(){
    console.log(this.books)
    let test =this.bookService.getAllBooks()
    console.log(test,"test")
    this.books = test
    console.log(this.books)
  }

  updateBook(aId:number, bId: number){
    
  }

  delBook(aId:number, bId: number){
    let authors = this.authorService.getAllAuthor()
    console.log(authors)
    for(let a of authors){
      if(a.id==aId){
        console.log(a)
        a.books= a.books.filter(res=>{
          return res.id!=bId
        })
        console.log(a)
        this.authorService.updateAuthor(a)
        this.getBooks()
        console.log(this.books)
        break
      }
    }
  }
}
