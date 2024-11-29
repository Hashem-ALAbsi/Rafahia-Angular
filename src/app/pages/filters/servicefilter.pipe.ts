import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'servicefilter'
})
export class ServicefilterPipe implements PipeTransform {

  transform(items: any[], service: string): any[] {
    if (!items || !service) {
      return items;
    }

    const searchTerm = service.toLowerCase();
    return items.filter(item =>
      (item.company && item.company.toLowerCase().includes(searchTerm)) ||
      (item.description && item.description.toLowerCase().includes(searchTerm)) ||
      (item.price && item.price.toString().toLowerCase().includes(searchTerm))||
      (item.number && item.number.toString().toLowerCase().includes(searchTerm)) ||
      (item.name && item.name.toLowerCase().includes(searchTerm))
      
    );
  }
}
