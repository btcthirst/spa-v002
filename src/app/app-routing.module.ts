import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorViewComponent } from './authors/author-view/author-view.component';
import { BookViewComponent } from './books/book-view/book-view.component';
import { GenreViewComponent, CreateComponent, UpdateComponent } from './genres';

const routes: Routes = [
  {path:'',redirectTo:'authors',pathMatch:'full'},
  {path:'authors',component: AuthorViewComponent},
  {path:'genres',
    children:[
      {path:'',component: GenreViewComponent},
      {path:'create', component: CreateComponent},
      {path:'create', component: UpdateComponent}
    ]
  },
  {path:'books',component: BookViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
