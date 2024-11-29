import { Component, OnInit } from '@angular/core';
import { RafahiaService } from 'src/app/Services/rafahia.service';

@Component({
  selector: 'app-blocked-clint',
  templateUrl: './blocked-clint.component.html',
  styleUrls: ['./blocked-clint.component.css']
})
export class BlockedClintComponent implements OnInit {
  constructor(private rafahiaService:RafahiaService){}
  isloading:boolean=false;
    admins!: any;
    
    searchTerm:any;
    searchCompany:any;
    page:number=1;
    count: number=0;
    tablesize:number=5;
    tablesSizes:any=[5,10,15,20];

    ngOnInit()
    {
       this.getalladmin();
    }

    
    getalladmin(){
      this.rafahiaService.alladmingets().subscribe((res:any)=>{
        console.log(res);
  
        this.admins=res
      })
    }
    // getalladmin(){
    //   this.rafahiaService.alladmingets().subscribe((res:any)=>{
    //     console.log(res);

    //     this.admins=res
    //   })
    // }
    onTableDataChange(event:any){
      this.page=event;
      this.getalladmin();
      
    }
    onTableSizeChange(event:any){
      this.tablesize=event.target.value;
      this.page=1;
      this.getalladmin();
      
    }

}
