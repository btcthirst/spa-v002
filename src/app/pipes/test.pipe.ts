import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: string| undefined): string|null {
    let test = value
    if(test!=undefined){
      return test.slice(0,1).toUpperCase()+".";
    }
    
    return null
  }

}
