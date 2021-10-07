import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseElement } from '../models/base-element';

@Component({
  selector: 'dynamic-form-element',
  templateUrl: './dynamic-form-element.component.html',
  styleUrls: ['./dynamic-form-element.component.css']
})
export class DynamicFormElementComponent implements OnInit {

  @Input()
  public element!: BaseElement<any>;
  @Input()
  form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

  get isValid(){
    return this.form.controls[this.element.key].valid;
  }

  get isDirty(){
    return this.form.controls[this.element.key].dirty;
  }

}
