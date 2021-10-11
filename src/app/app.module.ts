import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NotFoundComponent } from './other/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GenresModule } from './genres/genres.module';
import { BooksRoutingModule } from './books/books-routing.module';
import { CommonModule } from '@angular/common';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { BooksModule } from './books/books.module';
import { GenresRoutingModule } from './genres/genres-routing.module';
import { AuthorsModule } from './authors/authors.module';
import { AuthorsRoutingModule } from './authors/authors-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    GenresModule,
    BooksModule,
    AuthorsModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserModule,
    BooksRoutingModule,
    GenresRoutingModule,
    AuthorsRoutingModule,
    AppRoutingModule,
    DynamicFormModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
