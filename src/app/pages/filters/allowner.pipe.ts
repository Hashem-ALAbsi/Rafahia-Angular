import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'allowner'
})
export class AllownerPipe implements PipeTransform {

  transform(items: any[], ownere: string): any[] {
    if (!items || !ownere) {
      return items;
    }

    const searchTerm = ownere.toLowerCase();
    return items.filter(item =>
      (item.userName && item.userName.toLowerCase().includes(searchTerm)) ||
      (item.userEmail && item.userEmail.toLowerCase().includes(searchTerm)) ||
      (item.companyName && item.companyName.toLowerCase().includes(searchTerm))
      
    );
  }

}
