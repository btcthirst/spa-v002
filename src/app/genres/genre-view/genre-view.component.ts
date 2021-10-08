import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genre } from 'src/app/models/genre';
import { GenreCrudService } from 'src/app/services/genre-crud.service';


@Component({
  selector: 'app-genre-view',
  templateUrl: './genre-view.component.html',
  styleUrls: ['./genre-view.component.css']
})
export class GenreViewComponent implements OnInit {

  constructor(
    private genreCRUD: GenreCrudService,
    private router: Router,
    ) { }
  list!:Genre[]
  ngOnInit(): void {
    this.getGenre()
  }

  getGenre(){
    this.list = this.genreCRUD.getAllGenres()
  }
  toUpdateGenre(id:number){
    this.router.navigate([`/genres/update/${id}`])
  }

  deleteGenre(id: number){
    this.genreCRUD.deleteGenre(id)
    this.getGenre()
    /* console.log(id)
    console.log(this.list) */
  }

}
