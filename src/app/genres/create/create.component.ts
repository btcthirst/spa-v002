import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseElement } from 'src/app/models/base-element';
import { Genre } from 'src/app/models/genre';
import { TextBoxElement } from 'src/app/models/textbox-element';
import { GenreCrudService } from 'src/app/services/genre-crud.service';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  @ViewChild('form') form!: FormGroup
  options: BaseElement<any>[]=[]
    
  constructor(private cruds: GenreCrudService) { }

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
    if(this.form.valid){
      let name =<string>this.form.controls.name.value
      let description =<string>this.form.controls.description.value
      let g: Genre = new Genre(0,name,description)
      console.log(g)
      this.cruds.createGenre(g)
    }
    
  }

}
