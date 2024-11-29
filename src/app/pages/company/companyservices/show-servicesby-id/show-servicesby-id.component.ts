import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RafahiaService } from 'src/app/Services/rafahia.service';

@Component({
  selector: 'app-show-servicesby-id',
  templateUrl: './show-servicesby-id.component.html',
  styleUrls: ['./show-servicesby-id.component.css']
})
export class ShowServicesbyIDComponent {
  isloading:boolean=false;
  services!:any;
  
  serviceid!:any;
  allservice!: any;
  service:any;
  email:string;
  page:number=1;
  count: number=0;
  tablesize:number=5;
  tablesSizes:any=[5,10,15,20];

  constructor(private rafahiaService:RafahiaService,private router:ActivatedRoute,private route:Router){}
  ngOnInit(){
    
    this.getservicebyid();
    var mytoken = localStorage.getItem('logintoken');
    var tokenData = JSON.parse(atob(mytoken.split('.')[1]));
    var myemail = tokenData.email;
    localStorage.setItem('userEmail', myemail);
    this.email=myemail;
  }
  
  getservicebyid() {
    this.isloading = true;
    this.serviceid = this.router.snapshot.paramMap.get('id');
    
    this.rafahiaService.getservicescompanyid(this.serviceid).subscribe((res) => {
      console.log(res);
      this.services = res;
      
      if (Array.isArray(res) && res.length === 0) {
        alert('لاتوجد لديك خدمات');
        this.route.navigate(['/mainowner'], { queryParams: { email: this.email } });
      }
      
      this.isloading = false;
    });
  }
  
     
  deleteservice(event:any,cid:Number,Email:string){
    if(confirm('هل انت متاكد من حذف الخدمة؟... ')){
      event.target.innerText ="جار الحذف....";
    this.rafahiaService.deleteservice(cid,this.email).subscribe((res:any)=>{

        console.log(cid);
        //console.log(cemail);
        
        this.getservicebyid();
       
      },
      (err:any)=>{
        alert(err.Message);

      });
    }
  }
  onTableDatachange(event:any){
    this.page=event;
    this.getservicebyid();

  }
  onTableSizechange(event:any): void{
    this.tablesize=event.target.value;

    this.page=1;
    this.getservicebyid();

  }

}
