import { Component } from '@angular/core';
import { RafahiaService } from 'src/app/Services/rafahia.service';

@Component({
  selector: 'app-show-report',
  templateUrl: './show-report.component.html',
  styleUrls: ['./show-report.component.css']
})
export class ShowReportComponent {
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
       this.getreportwatched();
       
    }

    getreportwatched(){
      this.isloading=true;
      this.adminservice.getreportwachted().subscribe((res:any)=>{
        console.log(res);

        this.activeuser=res
        this.isloading=false;
      })
    }
  
    onTableDataChangeactive(event:any){
      this.page=event;
      this.getreportwatched();
      
    }
    onTableSizeChangeactive(event:any){
      this.tablesize=event.target.value;
      this.page=1;
      this.getreportwatched();
      
    }
  
 
  deletecomment(event:any,cid:Number){
   
    if(confirm('هل تريد حذف البلاغ؟ ')){
      event.target.innerText ="جارالحذف....";
    this.adminservice.deleteComment(cid).subscribe((res:any)=>{

        console.log(cid);
        //console.log(cemail);
        console.log(res);
        console.log(res.Message);
         this.getreportwatched();
        

       
      },
      (err:any)=>{
        alert(err.Message);

      });
    }
  
}

}
