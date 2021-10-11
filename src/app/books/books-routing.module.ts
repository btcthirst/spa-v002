import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookViewComponent } from './book-view/book-view.component';
import { CreateComponent as BookCreate } from './create/create.component';

const routes: Routes = [ 
  {path:'books',
  children:[
    {path:'', component: BookViewComponent},
    {path:'create', component: BookCreate}
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
