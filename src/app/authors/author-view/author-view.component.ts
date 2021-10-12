import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author';
import { AuthorsCrudService } from 'src/app/services/authors-crud.service';

@Component({
  selector: 'app-author-view',
  templateUrl: './author-view.component.html',
  styleUrls: ['./author-view.component.css']
})
export class AuthorViewComponent implements OnInit {
  list!: Author[]
  constructor(
    private authorService: AuthorsCrudService,
  ) { }

  ngOnInit(): void {
    this.list = this.authorService.getAllAuthor()
  }

}
