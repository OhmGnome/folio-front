import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prop'
})
export class PropPipe implements PipeTransform {
  
  //filter a list of object by an expected value for a given property
  transform(items: Array<any>, prop: string, val: any): Array<any> {
    if (!items) return
    else return items.filter(item => item[prop] === val);
  }

}
