import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorViewComponent } from './author-view/author-view.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'authors',
    children:[
      {path:'',component: AuthorViewComponent},
      {path:'create', component: CreateComponent},
      {path:'update', component: UpdateComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsRoutingModule { }
