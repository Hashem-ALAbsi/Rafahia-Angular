import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RafahiaService } from 'src/app/Services/rafahia.service';

@Component({
  selector: 'app-showimagecompany',
  templateUrl: './showimagecompany.component.html',
})
export class ShowimagecompanyComponent {
  companyId: any;
  companyImages: any[]=[]; 
  email:string;

  constructor(private router:ActivatedRoute,private rafahiaService:RafahiaService) { }
  ngOnInit(){
    this.companyId=this.router.snapshot.paramMap.get('id');
    this.getAllCompanyImages();
    var mytoken = localStorage.getItem('logintoken');
    var tokenData = JSON.parse(atob(mytoken.split('.')[1]));
    var myemail = tokenData.email;
    localStorage.setItem('userEmail', myemail);
    this.email=myemail;
    console.log(myemail);
  }
  

  getAllCompanyImages() {
      this.rafahiaService.getAllCompanyImages(this.companyId).subscribe(
        response => {
          this.companyImages = response;
          console.log('Company images retrieved successfully', response);
          
          // Handle success response
        },
        error => {
          console.error('Error retrieving company images', error);
          // Handle error response
        }
      );

  }
  
  delete(event:any,cid:Number,Email:string){
    if(confirm('Are You sure want delete?.. ')){
      event.target.innerText ="Deleting....";
     this.rafahiaService.deletecompanyImage(cid,Email).subscribe((res:any)=>{

        console.log(cid);
        //console.log(cemail);
        console.log(res);
        console.log(res);
        this.getAllCompanyImages();
       
      },
      (err:any)=>{
        this.getAllCompanyImages();
        console.log(err.Message);

      });
    }
  }
}
