import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseElement } from '../models/base-element';
import { ElementsService } from '../services/elements.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() elements: BaseElement<any>[] = [];
  @Input('testFunc') onSubmit(){}
  form!: FormGroup;
  constructor(private es: ElementsService) { }

  ngOnInit(): void {
    this.form= this.es.toFormGroup(this.elements);
  }

 /*  onSubmit(){
    if(this.form.valid){
      console.log(this.form.value)
    }
  } */

}
