import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RafahiaService } from 'src/app/Services/rafahia.service';

@Component({
  selector: 'app-servicescompanydelete',
  templateUrl: './servicescompanydelete.component.html',
  styleUrls: ['./servicescompanydelete.component.css']
})
export class ServicescompanydeleteComponent {
  
  isloading:boolean=false;
  services!:any;
  
  serviceid!:any;
  allservice!: any;
  service:any;
  servicedel:any;
  email:string;
  page:number=1;
  count: number=0;
  tablesize:number=5;
  tablesSizes:any=[5,10,15,20];

  constructor(private rafahiaService:RafahiaService,private router:ActivatedRoute,private route:Router){}
  ngOnInit(){
    
    this.getservicebyid();
    this.getservicedeletetedbyid();
  
  }
  
  getservicebyid() {
    this.isloading = true;
    this.serviceid = this.router.snapshot.paramMap.get('id');
    console.log(this.serviceid)
    
    this.rafahiaService.getservicescompanyid(this.serviceid).subscribe((res) => {
      console.log(res);
      this.services = res;
      
      if (Array.isArray(res) && res.length === 0) {
        alert('لاتوجد لديك خدمات');
        
      }
      
      this.isloading = false;
    });
  }
  getservicedeletetedbyid() {
    this.isloading = true;
    
    
    this.rafahiaService.getservicesdeletecompanyid(this.serviceid).subscribe((res) => {
      console.log(res);
      this.servicedel = res;
      
      if (Array.isArray(res) && res.length === 0) {
        alert(' لاتوجد لديك خدمات مورشفة');
        
      }
      
      this.isloading = false;
    });
  }
  
     
 


}
