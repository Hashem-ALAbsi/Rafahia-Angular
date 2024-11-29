import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RafahiaService } from 'src/app/Services/rafahia.service';

@Component({
  selector: 'app-transferbycompany',
  templateUrl: './transferbycompany.component.html',
  styleUrls: ['./transferbycompany.component.css']
})
export class TransferbycompanyComponent {
  
  constructor(private rafahiaService:RafahiaService ,private route:Router){}
  isloading:boolean=false;
    companyid!:any;
    page:number=1;
    count: number=0;
    tablesize:number=10;
    tablesSizes:any=[10,15,20];
    email:string;
    com:any[];
    e:any[];
    
    

    allcompany:any;
    searchcompany:any;
    ngOnInit()
    {
      
      var mytoken = localStorage.getItem('logintoken');
      var tokenData = JSON.parse(atob(mytoken.split('.')[1]));
      var email = tokenData.email;
      localStorage.setItem('userEmail', email);
      this.email = email;
      this.getCompanyByEmail();
      console.log(this.email);
    }
    getCompanyByEmail():  void  {
      this.rafahiaService.getCompanyEmail(this.email).subscribe(
         (res : any[]) => {
          if (res.length > 0) {
  
          this.com=res[0];
          for (const item of res) {
            const id = item.id;
            console.log(id);
            this.companyid=id;
  
           this.e=res;
           console.log(res);
           console.log(this.companyid);
           this.getAllOrders();
           
           
          
          }
         }
         (error) => {
           console.error(error);
           
         }}
       );
     }


     getAllOrders() {
      this.isloading = true;
      this.rafahiaService.gettransferompany(this.companyid).subscribe(
        (res: any) => {
          console.log(res);
          this.allcompany = res;
          if (res.length === 0) {
            alert('لاتوجد لديك حوالات');
            this.route.navigate(['/mainowner'], { queryParams: { email: this.email } });

          }
          this.isloading = false;
        },
        (error) => {
          console.error(error);
          this.isloading = false;
        }
      );
    }
   

   
    
     
    
    onTableDatachange(event:any){
      this.page=event;
      this.getAllOrders();

    }
    onTableSizechange(event:any): void{
      this.tablesize=event.target.value;

      this.page=1;
      this.getAllOrders();

    }




}
