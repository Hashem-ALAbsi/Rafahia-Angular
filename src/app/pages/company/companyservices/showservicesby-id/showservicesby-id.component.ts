import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RafahiaService } from 'src/app/Services/rafahia.service';

@Component({
  selector: 'app-showservicesby-id',
  templateUrl: './showservicesby-id.component.html',
})
export class ShowservicesbyIDComponent {
  isloading:boolean=false;
  service!:any;
  
  serviceid!:any;
  allservice!: any;
  searchTerm:any;

  constructor(private rafahiaService:RafahiaService,private router:ActivatedRoute){}
  ngOnInit(){
    
    this.getservicebyid();
  }
  
  getservicebyid(){
    this.isloading=true;
    this.serviceid=this.router.snapshot.paramMap.get('id');
  // alert(this.companysid);
 this.rafahiaService.getservicescompanyid(this.serviceid).subscribe((res) =>{
    console.log(res)
   this.service=res;
    // console.log(this.company);
    this.isloading=false;
  });
  }
  Email='t@gmail.com'
     
  deleteservice(event:any,cid:Number,Email:string){
    if(confirm('Are You sure want delete?.. ')){
      event.target.innerText ="Deleting....";
    this.rafahiaService.deleteservice(cid,this.Email).subscribe((res:any)=>{

        console.log(cid);
        //console.log(cemail);
        console.log(res);
        console.log(res.Message);
        this.getservicebyid();
       
      },
      (err:any)=>{
        alert(err.Message);

      });
    }
  }
}
