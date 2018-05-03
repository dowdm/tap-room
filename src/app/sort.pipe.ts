import {Pipe, PipeTransform} from '@angular/core';
import { Keg } from './model/keg.model';

@Pipe({
  name: "sort",
  pure: false
})

export class SortPipe implements PipeTransform {
  transform(input: Keg[], desiredSort) {
    var output: Keg[] = [];
    if(desiredSort === "alcohol") {
      return output = input.sort(function(a, b) {
        return a.alcoholContent - b.alcoholContent;
      });
    } else if(desiredSort === "price") {
      return output = input.sort(function(a, b) {
        return a.price - b.price;
      });
    } else {
      return input;
    }
  }
}
