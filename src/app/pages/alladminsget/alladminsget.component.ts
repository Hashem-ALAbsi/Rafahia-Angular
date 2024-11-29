import { Component } from '@angular/core';
import { RafahiaService } from 'src/app/Services/rafahia.service';

@Component({
  selector: 'app-alladminsget',
  templateUrl: './alladminsget.component.html',
})
export class AlladminsgetComponent {
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


