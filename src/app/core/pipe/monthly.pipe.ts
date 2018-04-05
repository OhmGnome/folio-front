import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthly'
})
export class MonthlyPipe implements PipeTransform {
  transform(item: number, priceModifier: number): number {
    if (!item || isNaN(item)) return
    else return priceModifier === 12 ? item : item / 12
  }
}
