import { Component } from '@angular/core';
import { RafahiaService } from 'src/app/Services/rafahia.service';

@Component({
  selector: 'app-show-all-owners',
  templateUrl: './show-all-owners.component.html',
  styleUrls: ['./show-all-owners.component.css']
})
export class ShowAllOwnersComponent {

  constructor(private adminservice:RafahiaService){}
  isloading:boolean=false;
    owner!: any;
    page:number=1;
    ownere:any;
    count: number=0;
    tablesize:number=10;
    tablesSizes:any=[10,15,20];
   

    ngOnInit()
    {
       this.getalladmin();
    }
    getalladmin(){
      this.isloading=true;
      this.adminservice.getallowners().subscribe((res:any)=>{
        console.log(res);

        this.owner=res
        this.isloading=false;
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
