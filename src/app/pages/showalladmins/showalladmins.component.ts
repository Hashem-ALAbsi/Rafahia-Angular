import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RafahiaService ,adminResponse} from 'src/app/Services/rafahia.service';

@Component({
  selector: 'app-showalladmins',
  templateUrl: './showalladmins.component.html',
  styleUrls: ['./showalladmins.component.css']
})
export class ShowalladminsComponent {
  constructor(private rafahiaService:RafahiaService){}
  isloading:boolean=false;
    admins!: any;
    
    searchTerm:any;
    searchCompany:any;
    page:number=1;
    count: number=0;
    tablesize:number=10;
    tablesSizes:any=[10,15,20];

    ngOnInit()
    {
       this.getalladmin();
    }

    
    getalladmin(){
      this.rafahiaService.getalladmin().subscribe((res:any)=>{
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
