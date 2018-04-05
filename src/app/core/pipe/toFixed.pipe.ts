import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFixed'
})
export class ToFixedPipe implements PipeTransform {
  
  //we retain all the digits of the object to calculate an accurate total
  //so, we only display a price of up to two decimal places
  //prefix is usually $ because toFixed() converts to string
  transform(item: number, prefix: string): string {
    if (!item || isNaN(item)) return ''
    else {
      let fixed = item.toFixed(2)
      return (prefix || '') + fixed
    }
  }

}
