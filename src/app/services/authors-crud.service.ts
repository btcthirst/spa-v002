import { Injectable } from '@angular/core';
import { Author } from '../models/author';
import { AuthorsDbService } from './authors-db.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorsCrudService {

  constructor(
    private authorDB: AuthorsDbService
  ) { }

  getAllAuthor(){
    return this.authorDB.getAllAuthor()
  }

  getAuthorByID(id: number){
    return this.authorDB.getAuthorByID(id)
  }

  createAuthor(a: Author){
    this.authorDB.createAuthor(a)
  }

  updateAuthor(a: Author){
    this.authorDB.updateAuthor(a)
  }

  deleteAuthor(id:number){
    this.authorDB.deleteAuthor(id)
  }
}
