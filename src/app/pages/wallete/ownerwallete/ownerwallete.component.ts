import { Component } from '@angular/core';
import { RafahiaService } from 'src/app/Services/rafahia.service';

@Component({
  selector: 'app-ownerwallete',
  templateUrl: './ownerwallete.component.html',
  styleUrls: ['./ownerwallete.component.css']
})
export class OwnerwalleteComponent {


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
      
      this.getallwalleteOwner();
      var mytoken = localStorage.getItem('logintoken');
      var tokenData = JSON.parse(atob(mytoken.split('.')[1]));
      var myemail = tokenData.email;
      localStorage.setItem('userEmail', myemail);
      this.email=myemail;
     
    }

    getallwalleteOwner(){
      this.isloading=true;
      this.adminservice.getallwalleteOwner().subscribe((res:any)=>{
        console.log(res);
        
         

        this.allcompany=res
        
       // this.img=this.allcompany.imageCompany
        this.isloading=false;
        //this.img= res.imageCompany
      });
    }
   

   
    
     
   
    onTableDatachange(event:any){
      this.page=event;
      this.getallwalleteOwner();

    }
    onTableSizechange(event:any): void{
      this.tablesize=event.target.value;

      this.page=1;
      this.getallwalleteOwner();

    }

}
