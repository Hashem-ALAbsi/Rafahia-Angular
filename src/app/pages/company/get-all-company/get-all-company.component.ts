import { Component, OnInit } from '@angular/core';
import { RafahiaService } from 'src/app/Services/rafahia.service';

@Component({
  selector: 'app-get-all-company',
  templateUrl: './get-all-company.component.html',
  styleUrls: ['./get-all-company.component.css']
})
export class GetAllCompanyComponent implements OnInit {
  isloading: boolean = false;
  companyid!: any;
  page: number = 0;
  count: number = 0;
  tablesize: number = 10;
  tablesSizes: number[] = [5, 10, 25, 50, 100];
  email: string;
  selectedOpportunity: any;
  allcompany!: any;
  searchcompany: any = '';

  constructor(private adminservice: RafahiaService) { }

  ngOnInit() {
    this.getallcompanys();
    const mytoken = localStorage.getItem('logintoken');
    if (mytoken) {
      const tokenData = JSON.parse(atob(mytoken.split('.')[1]));
      const myemail = tokenData.email;
      localStorage.setItem('userEmail', myemail);
      this.email = myemail;
    }
    console.log(this.searchcompany)
  }

  getallcompanys() {
    this.isloading = true;
    this.adminservice.getallcompany().subscribe((res: any) => {
      this.allcompany = res;
      this.count = res.length;
      this.isloading = false;
      console.log(res)
    });
  }

  deletecompany(event: any, cid: number, Email: string) {
    if (confirm('هل انت متاكد من حذف الشركه?.. ')) {
      event.target.innerText = "جار الحذف....";
      this.adminservice.deletecompany(cid, this.email).subscribe(
        (res: any) => {
          console.log(res);
          this.getallcompanys();
        },
        (err: any) => {
          alert(err);
          console.log(err.Message);
        }
      );
    }
  }

  onTableDatachange(event: any) {
    this.page = event.first;
    this.tablesize = event.rows;
    this.getallcompanys();
  }

  onTableSizechange(event: any) {
    this.tablesize = event.target.value;
    this.page = 0;
    this.getallcompanys();
  }
}
