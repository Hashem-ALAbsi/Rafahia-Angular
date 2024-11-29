import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RafahiaService } from 'src/app/Services/rafahia.service';

@Component({
  selector: 'app-showservice-image',
  templateUrl: './showservice-image.component.html',
})
export class ShowserviceImageComponent {
  serviceId: any;
  serviceImages: any[]=[]; // Assuming the type of company images
  email:string;
  constructor(private router:ActivatedRoute,private rafahiaService:RafahiaService) { }
  ngOnInit(){
    this.serviceId=this.router.snapshot.paramMap.get('id');
    this.getAllSeviceImages();
    var mytoken = localStorage.getItem('logintoken');
      var tokenData = JSON.parse(atob(mytoken.split('.')[1]));
      var myemail = tokenData.email;
      localStorage.setItem('userEmail', myemail);
      this.email=myemail;
      console.log(this.email)
  }
  

  getAllSeviceImages() {

    this.rafahiaService.getAllSeviceImages(this.serviceId)
    .subscribe(
        response => {
          this.serviceImages = response;
          console.log('Company images retrieved successfully', response);
          
        },
        error => {
          console.error('Error retrieving company images', error);
          
        }
      );

  }
  
  delete(event:any,cid:Number,Email:string){
    if(confirm('Are You sure want delete?.. ')){
      event.target.innerText ="Deleting....";
      this.rafahiaService.deleteserviceImage(cid,Email)
     .subscribe((res:any)=>{

        console.log(cid);
        //console.log(cemail);
        console.log(res);
        console.log(res);
        this.getAllSeviceImages();
        alert('تم الحذف');
       
      },
      (err:any)=>{
        // alert(err.error.errors);
        console.log(err.Message);

      });
    }
  }
  deletecompany(event:any,cid:Number,Email:string){
    if(confirm('هل انت متاكد من حذف الصورة?.. ')){
      event.target.innerText ="جار الحذف....";
    this.rafahiaService.deleteserviceImage(cid,this.email).subscribe((res:any)=>{

        console.log(cid);
        //console.log(cemail);
        console.log(res);
        console.log(res.Message);
        this.getAllSeviceImages();
       
      },
      (err:any)=>{
        this.getAllSeviceImages();
        // alert(err);
        console.log(err.Message);

      });
    }
  }

}
