import {Pipe, PipeTransform} from '@angular/core';
import { Keg } from './model/keg.model';

@Pipe({
  name: "search",
  pure: false
})

export class SearchPipe implements PipeTransform {
  transform(input: Keg[], desiredSearch) {
    let output: Keg[] = [];
    for (let i = 0; i < input.length; i++) {
      console.log(desiredSearch);
      if(input[i].name.toLowerCase().includes(desiredSearch.toLowerCase()) === true){
        output.push(input[i]);
      }
    }
    return output;
  }
}
