import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseElement } from 'src/app/models/base-element';
import { Genre } from 'src/app/models/genre';
import { TextBoxElement } from 'src/app/models/textbox-element';
import { GenreCrudService } from 'src/app/services/genre-crud.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  id =0
  updGenre!: Genre
  updForm!: FormGroup
  
    
  constructor(
    private cruds: GenreCrudService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {    
   this.createForm()
   this.getId()
   this.getData()
  }

  createForm(){
    this.updForm= new FormGroup({
      name: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required)
    })
  }

  getData(){
    let test =this.cruds.getGenreByID(this.id)
    if(test!=null){
      this.updGenre = test
    }
    
  }

  getId(){
    this.activatedRoute.params.subscribe(res=>{
      if(res.id){
        this.id= res.id
      }
    })
  }

 

  onSubmit(){
    if(this.updForm.valid){
      this.updGenre.name = this.updForm.controls.name.value
      this.updGenre.description = this.updForm.controls.description.value
      this.cruds.updateGenre(this.updGenre)
      this.router.navigate(['/genres'])
    }
    
  }

}
