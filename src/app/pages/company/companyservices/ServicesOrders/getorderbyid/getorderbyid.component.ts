import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RafahiaService } from 'src/app/Services/rafahia.service';

@Component({
  selector: 'app-getorderbyid',
  templateUrl: './getorderbyid.component.html',
  styleUrls: ['./getorderbyid.component.css']
})
export class GetorderbyidComponent {
  
  isloading:boolean=false;
  searchTerm:any;
  searchCompany:any;
  serviceId:any;
  email:string;
  page:number=1;
  count: number=0;
  tablesize:number=5;
  tablesSizes:any=[5,10,15,20];
  orders:any;
  constructor(private router:ActivatedRoute,private rafahiaService:RafahiaService) { }
  ngOnInit(){
    this.serviceId=this.router.snapshot.paramMap.get('id');
    this.getallorders();
  }
  getallorders(){
    this.isloading=true;
    this.rafahiaService.getAllSeviceOrders(this.serviceId).subscribe((res:any)=>{
      console.log(res);
      
       

      this.orders=res
      
     // this.img=this.allcompany.imageCompany
      this.isloading=false;
      //this.img= res.imageCompany
    })
  }
  acceptorder(event:any,cid:Number){
   
      if(confirm('هل انت متاكد من قبولز الطلب?.. ')){
        event.target.innerText ="جاري المعالجه....";
      this.rafahiaService.acceptorder(cid).subscribe((res:any)=>{
  
          console.log(cid);
          //console.log(cemail);
          console.log(res);
          console.log(res.Message);
          this.getallorders();
         
        },
        (err)=>{
          alert(err.error);
  
        });
      }
    
  }
  deleteorder(event:any,cid:Number){
   
    if(confirm('هل انت متاكد من رفض الطلب?.. ')){
      event.target.innerText ="جاري المعالجه....";
    this.rafahiaService.cancelorder(cid).subscribe((res:any)=>{
  
        console.log(cid);
        //console.log(cemail);
        console.log(res);
        console.log(res.message);
        this.getallorders();
       
      },
      (err)=>{
        alert(err.error);
        console.log(err.error);
        this.getallorders();
  
      });
    }
  
  }
generatePDF(orderId: number): void {
  this.rafahiaService.generateOrderPDF(orderId);
}
onTableDatachange(event:any){
  this.page=event;
  this.getallorders();

}
onTableSizechange(event:any): void{
  this.tablesize=event.target.value;

  this.page=1;
  this.getallorders();

}

}
