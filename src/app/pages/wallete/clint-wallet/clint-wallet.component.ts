import { Component } from '@angular/core';
import { RafahiaService } from 'src/app/Services/rafahia.service';

@Component({
  selector: 'app-clint-wallet',
  templateUrl: './clint-wallet.component.html',
  styleUrls: ['./clint-wallet.component.css']
})
export class ClintWalletComponent {
  

  constructor(private adminservice:RafahiaService){}
  isloading:boolean=false;
    companyid!:any;
    page:number=1;
    count: number=0;
    tablesize:number=10;
    tablesSizes:any=[10,15,20];
    email:string;
    
    

    allcompany!: any;
    searchcompany:any;
    ngOnInit()
    {
      
      this.getallwalleteClint();
      var mytoken = localStorage.getItem('logintoken');
      var tokenData = JSON.parse(atob(mytoken.split('.')[1]));
      var myemail = tokenData.email;
      localStorage.setItem('userEmail', myemail);
      this.email=myemail;
     
    }

    getallwalleteClint(){
      this.isloading=true;
      this.adminservice.getallwalleteClint().subscribe((res:any)=>{
        console.log(res);
        
         

        this.allcompany=res
        
       // this.img=this.allcompany.imageCompany
        this.isloading=false;
        //this.img= res.imageCompany
      });
    }
   

   
    
     
   
    onTableDatachange(event:any){
      this.page=event;
      this.getallwalleteClint();

    }
    onTableSizechange(event:any): void{
      this.tablesize=event.target.value;

      this.page=1;
      this.getallwalleteClint();

    }


}
