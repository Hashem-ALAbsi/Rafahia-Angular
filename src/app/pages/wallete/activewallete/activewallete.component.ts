import { Component } from '@angular/core';
import { RafahiaService } from 'src/app/Services/rafahia.service';

@Component({
  selector: 'app-activewallete',
  templateUrl: './activewallete.component.html',
  styleUrls: ['./activewallete.component.css']
})
export class ActivewalleteComponent {

  

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
      
      this.getallwallete();
      var mytoken = localStorage.getItem('logintoken');
      var tokenData = JSON.parse(atob(mytoken.split('.')[1]));
      var myemail = tokenData.email;
      localStorage.setItem('userEmail', myemail);
      this.email=myemail;
     
    }

    getallwallete(){
      this.isloading=true;
      this.adminservice.getallwallete().subscribe((res:any)=>{
        console.log(res);
        this.getallwallete();
         

        this.allcompany=res
        
       // this.img=this.allcompany.imageCompany
        this.isloading=false;
        //this.img= res.imageCompany
      });
    }
   

   
    
     
   
    onTableDatachange(event:any){
      this.page=event;
      this.getallwallete();

    }
    onTableSizechange(event:any): void{
      this.tablesize=event.target.value;

      this.page=1;
      this.getallwallete();

    }

    canceluser(event:any,cid:Number){
   
      if(confirm('هل انت متاكد من ايقاف المحفضة?.. ')){
        event.target.innerText ="جار الحظر....";
      this.adminservice.cancelwallete(cid).subscribe((res:any)=>{
  
          console.log(cid);
          //console.log(cemail);
          console.log(res);
          this.getallwallete();
         
          
         
         
        },
        (err:any)=>{
          alert(err.Message);
  
        });
      }
    
  }

}


