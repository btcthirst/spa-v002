import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthorViewComponent } from './authors/author-view/author-view.component';
import { BookViewComponent } from './books/book-view/book-view.component';
import { NotFoundComponent } from './other/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GenresModule } from './genres/genres.module';
import { GenresRoutingModule } from './genres/genres-routing.module';
import { CommonModule } from '@angular/common';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';



@NgModule({
  declarations: [
    AppComponent,
    AuthorViewComponent,   
    BookViewComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    GenresModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserModule,
    GenresRoutingModule,
    AppRoutingModule,
    DynamicFormModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
