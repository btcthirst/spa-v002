import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { GenreViewComponent } from './genre-view/genre-view.component';
import { GenresRoutingModule } from './genres-routing.module';
import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';




@NgModule({
  declarations: [
    CreateComponent,
    UpdateComponent,
    GenreViewComponent,
  ],
  imports: [
    CommonModule,
     DynamicFormModule,
    ReactiveFormsModule,
    FormsModule,
    GenresRoutingModule,   
  ]
})
export class GenresModule { }
