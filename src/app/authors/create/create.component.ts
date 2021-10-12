import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Author } from 'src/app/models/author';
import { BaseElement } from 'src/app/models/base-element';
import { Book } from 'src/app/models/book';
import { TextBoxElement } from 'src/app/models/textbox-element';
import { AuthorsCrudService } from 'src/app/services/authors-crud.service';
import { GenreCrudService } from 'src/app/services/genre-crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @ViewChild('form') form!:FormGroup
  options: BaseElement<any>[]=[] 
  toggle: boolean = false
  toggle2: boolean=false
  authorNew!: Author
  booksToAdd: Book[]=[]
  errMess:string =""
  constructor(    
    private cruds: AuthorsCrudService,
    private genreCruds: GenreCrudService
  ) { }

  ngOnInit(): void {
    this.getElements()
  }

  getElements(){
    this.options =[
      new TextBoxElement({
        key: "firstName",
        label: "Имя",
        required: true,
        order: 1
      }),
      new TextBoxElement({
        key: "patronymic",
        label: "Отчество",
        required: false,
        order: 2
      }),
      new TextBoxElement({
        key: "surname",
        label: "Фамилия",
        required: true,
        order: 3
      }),
      new TextBoxElement({
        key: "bithDate",
        label: "Дата рождения",
        required: true,
        order: 4
      }),
    ]
  }

  addBook(){
    this.toggle= !this.toggle
    
  }

  onSubmit(){
    
    console.log("i am working!")
    if(this.form.valid){
      this.authorNew =this.form.value
      this.authorNew.books = this.booksToAdd
      console.log(this.authorNew,this.authorNew.books)
      if(this.authorNew.books== undefined){
        this.toggle2= !this.toggle2
        this.errMess = "нужно добавить хотя бы одну книгу"
        
        console.log(this.errMess, this.toggle2)
      }
    }
  }
}
