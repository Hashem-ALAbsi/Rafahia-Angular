import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtercompany'
})
export class FiltercompanyPipe implements PipeTransform {

  transform(items: any[], searchcompany: string): any[] {
    if (!items || !searchcompany) {
      return items;
    }

    searchcompany = searchcompany.toLowerCase();
    return items.filter(item => item.name.toLowerCase().includes(searchcompany) ||
    item.typeCompanyName.toLowerCase().includes(searchcompany) );
    // item.username.toLowerCase().includes(searchTerm)||
    // item.email.toLowerCase().includes(searchTerm));

  }
  

}
