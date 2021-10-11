import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';
import { AuthorViewComponent } from './author-view/author-view.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { BooksModule } from '../books/books.module';


@NgModule({
  declarations: [
    AuthorViewComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BooksModule,
    DynamicFormModule,
    AuthorsRoutingModule
  ]
})
export class AuthorsModule { }
