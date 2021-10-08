import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent, GenreViewComponent, UpdateComponent } from '.';


const routes: Routes = [ 
  {path:'genres',
    children:[
      {path:'',component: GenreViewComponent},
      {path:'create', component: CreateComponent},
      {path:'update/:id', component: UpdateComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenresRoutingModule { }
