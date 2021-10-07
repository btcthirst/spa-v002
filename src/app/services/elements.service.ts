import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseElement } from '../models/base-element';

@Injectable({
  providedIn: 'root'
})
export class ElementsService {

  constructor() { }

  toFormGroup(elements: BaseElement<any>[]){
    let group: any = {};

    elements.forEach(element => {
      group[element.key] = element.required ? new FormControl(element.value || "", Validators.required)
                                            : new FormControl(element.value || "");
    });

    return new FormGroup(group);
  }
}
