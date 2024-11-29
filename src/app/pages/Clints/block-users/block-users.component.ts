import { Component } from '@angular/core';
import { RafahiaService } from 'src/app/Services/rafahia.service';

@Component({
  selector: 'app-block-users',
  templateUrl: './block-users.component.html',
  styleUrls: ['./block-users.component.css']
})
export class BlockUsersComponent {
  
  
  constructor(private adminservice:RafahiaService){}
  isloading:boolean=false;
    
    blockuser!:any; 
    
    activeuserse:any;
    page:number=1;
    count: number=0;
    tablesize:number=10;
    tablesSizes:any=[10,15,20];
    ngOnInit()
    {
       
       this.getblockclint();
    }

   
    getblockclint(){
      this.isloading=true;
      this.adminservice.getuserblock().subscribe((res:any)=>{
        console.log(res);

        this.blockuser=res
        this.isloading=false;
      })
    }
   
    onTableDataChange(event:any){
      this.page=event;
      this.getblockclint();
      
    }
    onTableSizeChange(event:any){
      this.tablesize=event.target.value;
      this.page=1;
      this.getblockclint();
      
    }
    acceptuser(event:any,cid:Number){
   
      if(confirm('هل انت متاكد من الغاء الحظر?.. ')){
        event.target.innerText ="جار الالغاء....";
      this.adminservice.acceptuser(cid).subscribe((res:any)=>{
  
          console.log(cid);
          //console.log(cemail);
          console.log(res);
          console.log(res.Message);
          
          this.getblockclint();
          

         
        },
        (err:any)=>{
          alert(err.Message);
  
        });
      }
    
  }
 



}
