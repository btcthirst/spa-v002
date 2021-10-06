import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthorViewComponent } from './authors/author-view/author-view.component';
import { CreateComponent } from './authors/create/create.component';
import { UpdateComponent } from './authors/update/update.component';
import { BookViewComponent } from './books/book-view/book-view.component';
import { GenreViewComponent } from './genres/genre-view/genre-view.component';
import { NotFoundComponent } from './other/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuthorViewComponent,
    CreateComponent,
    UpdateComponent,
    BookViewComponent,
    GenreViewComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
