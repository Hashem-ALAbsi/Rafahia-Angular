import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activeuser'
})
export class ActiveuserPipe implements PipeTransform {

  transform(items: any[], activeuserse: string): any[] {
    if (!items || !activeuserse) {
      return items;
    }

    const searchTerm = activeuserse.toLowerCase();
    return items.filter(item =>
      (item.firstName && item.firstName.toLowerCase().includes(searchTerm)) ||
      (item.lastName && item.lastName.toLowerCase().includes(searchTerm)) ||
      (item.userName && item.userName.toLowerCase().includes(searchTerm)) ||
      (item.userEmail && item.userEmail.toLowerCase().includes(searchTerm)) ||
      (item.age && item.age.toString().toLowerCase().includes(searchTerm)) ||
      (item.id && item.id.toString().toLowerCase().includes(searchTerm)) ||
      (item.phoneNumbar && item.phoneNumbar.toLowerCase().includes(searchTerm))
    );
  }
}