import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseElement } from 'src/app/models/base-element';
import { Genre } from 'src/app/models/genre';
import { TextBoxElement } from 'src/app/models/textbox-element';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  @ViewChild('form') form!: FormGroup
  options: BaseElement<any>[]=[]
  genreIn: Genre={
    id: 0,
    name: '',
    description: ''
  };
  
  constructor() { }

  ngOnInit(): void {
    
    this.getElements()
  }

  getElements(){
    this.options =[
      new TextBoxElement({
        key: "name",
        label: "Название жанра",
        required: true,
        order: 1
      }),
      new TextBoxElement({
        key: "description",
        label: "Описание",
        required: true,
        order: 1
      }),
    ]
  }
  

  onSubmit(){
    console.log(this.form.value)

  }

}
