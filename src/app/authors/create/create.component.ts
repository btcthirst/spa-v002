import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseElement } from 'src/app/models/base-element';
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

  onSubmit(){
    console.log("i am working!")
  }
}
