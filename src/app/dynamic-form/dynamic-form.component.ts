import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseElement } from '../models/base-element';
import { ElementsService } from '../services/elements.service';
import { GenreCrudService } from '../services/genre-crud.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() elements: BaseElement<any>[] = [];
  @Input('testFunc') onSubmit:()=>void=()=>{}
  form!: FormGroup;
  constructor(private es: ElementsService, private cruds: GenreCrudService) { }

  ngOnInit(): void {
    this.form= this.es.toFormGroup(this.elements);
  }

 /*  onSubmit(){
    if(this.form.valid){
      console.log(this.form.value)
    }
  } */

}
