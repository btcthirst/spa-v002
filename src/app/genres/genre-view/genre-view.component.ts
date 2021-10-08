import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/genre';
import { GenreCrudService } from 'src/app/services/genre-crud.service';


@Component({
  selector: 'app-genre-view',
  templateUrl: './genre-view.component.html',
  styleUrls: ['./genre-view.component.css']
})
export class GenreViewComponent implements OnInit {

  constructor(private genreCRUD: GenreCrudService) { }
  list!:Genre[]
  ngOnInit(): void {
    this.getGenre()
  }

  getGenre(){
    this.list = this.genreCRUD.getAllGenres()
  }
  updateGenre(g: Genre){

  }

  deleteGenre(id: number){
    this.genreCRUD.deleteGenre(id)
    this.getGenre()
    /* console.log(id)
    console.log(this.list) */
  }

}
