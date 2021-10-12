import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BookViewComponent } from './book-view/book-view.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';



@NgModule({
  declarations: [
    BookViewComponent,
    CreateComponent,
    UpdateComponent
  ],
  exports:[
    CreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class BooksModule { }
