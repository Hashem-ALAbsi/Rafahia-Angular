import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchTerm: string): any[] {
    if (!items || !searchTerm) {
      return items;
    }

    searchTerm = searchTerm.toLowerCase();
    return items.filter(item => item.firstName.toLowerCase().includes(searchTerm) ||
    item.lastName.toLowerCase().includes(searchTerm) || 
    item.username.toLowerCase().includes(searchTerm)||
    item.email.toLowerCase().includes(searchTerm));
  }
  
}
// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'filter'
// })
// export class FilterPipe implements PipeTransform {
//   transform(items: any[], searchTerm: string, searchCompany: string): any[] {
//     if (!items || (!searchTerm && !searchCompany)) {
//       return items;
//     }

//     const filteredItems = items.filter(item => {
//       const searchTermMatch =
//         !searchTerm || (
//           item.firstName.toLowerCase().includes(searchTerm) ||
//           item.lastName.toLowerCase().includes(searchTerm) ||
//           item.username.toLowerCase().includes(searchTerm) ||
//           item.email.toLowerCase().includes(searchTerm)
//         );

//       const searchCompanyMatch =
//         !searchCompany || (
//           item.name.toLowerCase().includes(searchCompany) ||
//           item.typeCompanyName.toLowerCase().includes(searchCompany)
//         );

//       return searchTermMatch && searchCompanyMatch;
//     });

//     return filteredItems;
//   }
// }

