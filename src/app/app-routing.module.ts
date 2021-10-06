import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorViewComponent } from './authors/author-view/author-view.component';
import { BookViewComponent } from './books/book-view/book-view.component';
import { GenreViewComponent } from './genres/genre-view/genre-view.component';

const routes: Routes = [
  {path:'',redirectTo:'authors',pathMatch:'full'},
  {path:'authors',component: AuthorViewComponent},
  {path:'genres',component: GenreViewComponent},
  {path:'books',component: BookViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
