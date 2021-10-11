import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/models/book';
import { Genre } from 'src/app/models/genre';
import { GenreCrudService } from 'src/app/services/genre-crud.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  genres!: Genre[]
  form!: FormGroup
  @Input() updateBook!: Book
  
  constructor(
    private genreService: GenreCrudService
  ) { }

  ngOnInit(): void {
    this.createForm()
    this.getGenres()
    this.setData()
  }

  createForm(){
    this.form= new FormGroup({
      title: new FormControl("", Validators.required),
      numberOfPages: new FormControl("", Validators.required),
      genre: new FormControl("", Validators.required)
    })
  }

  getGenres(){
    this.genres = this.genreService.getAllGenres()
  }

  setData(){
    this.form.controls.title.setValue(this.updateBook.title)
    this.form.controls.numberOfPages.setValue(this.updateBook.numberOfPages)
    this.form.controls.genre.setValue(this.updateBook.genre)
  }
}
