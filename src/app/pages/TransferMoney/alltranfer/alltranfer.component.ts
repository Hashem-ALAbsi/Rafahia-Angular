import { Component } from '@angular/core';
import { RafahiaService } from 'src/app/Services/rafahia.service';

@Component({
  selector: 'app-alltranfer',
  templateUrl: './alltranfer.component.html',
  styleUrls: ['./alltranfer.component.css']
})
export class AlltranferComponent {
  

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
      
      this.getallTranfer();
      var mytoken = localStorage.getItem('logintoken');
      var tokenData = JSON.parse(atob(mytoken.split('.')[1]));
      var myemail = tokenData.email;
      localStorage.setItem('userEmail', myemail);
      this.email=myemail;
     
    }

    getallTranfer(){
      this.isloading=true;
      this.adminservice.getallTranfer().subscribe((res:any)=>{
        console.log(res);
        
         

        this.allcompany=res
        
       // this.img=this.allcompany.imageCompany
        this.isloading=false;
        //this.img= res.imageCompany
      });
    }
   

   
    
     
    
    onTableDatachange(event:any){
      this.page=event;
      this.getallTranfer();

    }
    onTableSizechange(event:any): void{
      this.tablesize=event.target.value;

      this.page=1;
      this.getallTranfer();

    }


}
