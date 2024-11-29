import { Component } from '@angular/core';
import { RafahiaService } from 'src/app/Services/rafahia.service';
@Component({
  selector: 'app-clint-active',
  templateUrl: './clint-active.component.html',
  styleUrls: ['./clint-active.component.css']
})
export class ClintActiveComponent {
  constructor(private adminservice:RafahiaService){}
  isloading:boolean=false;
    activeusers!: any;
   
    
    activeuserse:any;
    page:number=1;
    count: number=0;
    tablesize:number=10;
    tablesSizes:any=[10,15,20];
    ngOnInit()
    {
       this.getactiveclint();
     
    }

    getactiveclint(){
      this.isloading=true;
      this.adminservice.getuserActive().subscribe((res:any)=>{
        console.log(res);

        this.activeusers=res
        this.isloading=false;
      })
    }
  
    onTableDataChangeactive(event:any){
      this.page=event;
      this.getactiveclint();
      
    }
    onTableSizeChangeactive(event:any){
      this.tablesize=event.target.value;
      this.page=1;
      this.getactiveclint();
      
    }
  
 
  canceluser(event:any,cid:Number){
   
    if(confirm('هل انت متاكد من حظر المستخدم?.. ')){
      event.target.innerText ="جار الحظر....";
    this.adminservice.canceluser(cid).subscribe((res:any)=>{

        console.log(cid);
        //console.log(cemail);
        console.log(res);
       
        this.getactiveclint();
       
       
      },
      (err:any)=>{
        alert(err.Message);

      });
    }
  
}

   
}

