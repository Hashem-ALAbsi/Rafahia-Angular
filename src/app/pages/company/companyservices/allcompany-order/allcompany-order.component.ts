import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RafahiaService } from 'src/app/Services/rafahia.service';

@Component({
  selector: 'app-allcompany-order',
  templateUrl: './allcompany-order.component.html',
})
export class AllcompanyOrderComponent {
  isLoading: boolean = false;
  searchTerm: any;
  compid: any;
  searchCompany:any;
  orders: any;

  constructor(private router: ActivatedRoute, private rafahiaService: RafahiaService) { }

  ngOnInit() {
    this.compid = this.router.snapshot.paramMap.get('id');
    console.log(this.compid);
    this.getAllOrders();
  }

  getAllOrders() {
    this.isLoading = true;
    this.rafahiaService.getAllcompanyOrders(this.compid).subscribe(
      (res: any) => {
        console.log(res);
        this.orders = res;
        this.isLoading = false;
      },
      (error) => {
        console.error(error);
        this.isLoading = false;
      }
    );
  }
  getAllOrdersnotbooked() {
    this.isLoading = true;
    this.rafahiaService.getAllOrdersnotbookked(this.compid).subscribe(
      (res: any) => {
        console.log(res);
        this.orders = res;
        this.isLoading = false;
      },
      (error) => {
        console.error(error);
        this.isLoading = false;
      }
    );
  }
  getAllOrdersisbooked() {
    this.isLoading = true;
    this.rafahiaService.getAllOrdersbooked(this.compid).subscribe(
      (res: any) => {
        console.log(res);
        this.orders = res;
        this.isLoading = false;
      },
      (error) => {
        console.error(error);
        this.isLoading = false;
      }
    );
  }
  
  generatePDF(orderId: number): void {
    this.rafahiaService.generateOrderPDF(orderId);
  }

}
