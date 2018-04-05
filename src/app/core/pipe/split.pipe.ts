import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {
  transform(item: string, char: string, i: number): string {
    if (!item) return ''
    else return item.split(char)[i]
  }
}
