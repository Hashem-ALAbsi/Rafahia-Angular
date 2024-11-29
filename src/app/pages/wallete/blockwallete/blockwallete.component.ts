import { Component } from '@angular/core';
import { RafahiaService } from 'src/app/Services/rafahia.service';

@Component({
  selector: 'app-blockwallete',
  templateUrl: './blockwallete.component.html',
  styleUrls: ['./blockwallete.component.css']
})
export class BlockwalleteComponent {
  

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
      
      this.getallwalletelooked();
      var mytoken = localStorage.getItem('logintoken');
      var tokenData = JSON.parse(atob(mytoken.split('.')[1]));
      var myemail = tokenData.email;
      localStorage.setItem('userEmail', myemail);
      this.email=myemail;
     
    }

    getallwalletelooked(){
      this.isloading=true;
      this.adminservice.getallwalletelooked().subscribe((res:any)=>{
        console.log(res);
        
         

        this.allcompany=res
        
       // this.img=this.allcompany.imageCompany
        this.isloading=false;
        //this.img= res.imageCompany
      });
    }
   

   
    
     
   
    onTableDatachange(event:any){
      this.page=event;
      this.getallwalletelooked();

    }
    onTableSizechange(event:any): void{
      this.tablesize=event.target.value;

      this.page=1;
      this.getallwalletelooked();

    }
    acceptuser(event:any,cid:Number){
   
      if(confirm('هل انت متاكد من الغاء الحظر?.. ')){
        event.target.innerText ="جار الالغاء....";
      this.adminservice.acceptwallete(cid).subscribe((res:any)=>{
  
          console.log(cid);
          //console.log(cemail);
          console.log(res);
          console.log(res.Message);
          
          this.getallwalletelooked();
          

         
        },
        (err:any)=>{
          alert(err.Message);
  
        });
      }
    
  }


}
