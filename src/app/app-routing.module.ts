import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorViewComponent } from './authors/author-view/author-view.component';
import { BookViewComponent } from './books/book-view/book-view.component';
import { GenreViewComponent, CreateComponent, UpdateComponent } from './genres';
import { CreateComponent as BookCreate } from './books/create/create.component';

const routes: Routes = [
  {path:'',redirectTo:'authors',pathMatch:'full'},
  {path:'authors',component: AuthorViewComponent},
  {path:'genres',
    children:[
      {path:'',component: GenreViewComponent},
      {path:'create', component: CreateComponent},
      {path:'update', component: UpdateComponent}
    ]
  },
  {path:'books',
    children:[
      {path:'', component: BookViewComponent},
      {path:'create', component: BookCreate}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
