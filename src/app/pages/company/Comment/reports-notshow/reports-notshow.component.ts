import { Component } from '@angular/core';
import { RafahiaService } from 'src/app/Services/rafahia.service';

@Component({
  selector: 'app-reports-notshow',
  templateUrl: './reports-notshow.component.html',
  styleUrls: ['./reports-notshow.component.css']
})
export class ReportsNotshowComponent {
  
  constructor(private adminservice:RafahiaService){}
  isloading:boolean=false;
    activeuser!: any;
    blockuser!:any; 
    searchTerm:any;
    
    page:number=1;
    count: number=0;
    tablesize:number=10;
    tablesSizes:any=[10,15,20];
    ngOnInit()
    {
      
       this.getreportNotwachted();
    }

  
    getreportNotwachted(){
      this.isloading=true;
      this.adminservice.getreportNotwachted().subscribe((res:any)=>{
        console.log(res);

        this.blockuser=res
        this.isloading=false;
      })
    }
    onTableDataChangeactive(event:any){
      this.page=event;
     
      
    }
    onTableSizeChangeactive(event:any){
      this.tablesize=event.target.value;
      this.page=1;
    
      
    }
    onTableDataChange(event:any){
      this.page=event;
      this.getreportNotwachted();
      
    }
    onTableSizeChange(event:any){
      this.tablesize=event.target.value;
      this.page=1;
      this.getreportNotwachted();
      
    }
    reportwatched(event:any,cid:Number){
   
      if(confirm('هل تمت المشاهده؟ ')){
        event.target.innerText ="تمت المشاهدة....";
      this.adminservice.reportshowed(cid).subscribe((res:any)=>{
  
          // console.log(cid);
          // //console.log(cemail);
          // console.log(res);
          // console.log(res.Message);
         
          this.getreportNotwachted();

         
        },
        (err:any)=>{
          alert(err.Message);
  
        });
      }
    
  }
  deletecomment(event:any,cid:Number){
   
    if(confirm('هل تريد حذف البلاغ؟ ')){
      event.target.innerText ="جارالحذف....";
    this.adminservice.deleteComment(cid).subscribe((res:any)=>{

        // console.log(cid);
        // //console.log(cemail);
        // console.log(res);
        // console.log(res.Message);
        
        

       
      },
      (err:any)=>{
        alert(err.Message);

      });
    }
  
}


}
