import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormElementComponent } from './dynamic-form-element.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DynamicFormElementComponent,
    DynamicFormComponent
  ],
  exports:[
    DynamicFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class DynamicFormModule { }
