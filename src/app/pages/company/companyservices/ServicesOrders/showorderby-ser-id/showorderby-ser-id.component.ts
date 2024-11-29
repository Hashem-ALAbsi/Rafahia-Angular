import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RafahiaService } from 'src/app/Services/rafahia.service';

@Component({
  selector: 'app-showorderby-ser-id',
  templateUrl: './showorderby-ser-id.component.html',
})
export class ShoworderbySerIdComponent {
  
  isloading:boolean=false;
  searchTerm:any;
  searchCompany:any;
  serviceId:any;
  
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
   
      if(confirm('Are You sure want accept?.. ')){
        event.target.innerText ="accepting....";
      this.rafahiaService.acceptorder(cid).subscribe((res:any)=>{
  
          console.log(cid);
          //console.log(cemail);
          console.log(res);
          console.log(res.Message);
          this.getallorders();
         
        },
        (err:any)=>{
          alert(err.Message);
  
        });
      }
    
  }
  cancelorder(event:any,cid:Number){
   
    if(confirm('Are You sure want canceling?.. ')){
      event.target.innerText ="canceling....";
    this.rafahiaService.cancelorder(cid).subscribe((res:any)=>{

        console.log(cid);
        //console.log(cemail);
        console.log(res);
        console.log(res.Message);
        this.getallorders();
       
      },
      (err:any)=>{
        alert(err.Message);

      });
    }
  
}
generatePDF(orderId: number): void {
  this.rafahiaService.generateOrderPDF(orderId);
}
}
