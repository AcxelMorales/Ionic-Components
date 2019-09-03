import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], value: string, column: string): any[] {
    if ((value === '')) return items;

    return items.filter(data => {
      return data[column].toLowerCase().includes(value.toLowerCase());
    });
  }

}
