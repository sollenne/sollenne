import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseOrder'
})
export class ReverseOrderPipe implements PipeTransform {

  transform(arr: any): any {
    var copy = arr.slice();
    return copy.reverse();
  }

}
