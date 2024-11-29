import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RafahiaService } from 'src/app/Services/rafahia.service';

@Component({
  selector: 'app-addservice-image',
  templateUrl: './addservice-image.component.html',
})
export class AddserviceImageComponent implements OnInit {
  serviceId: any;
  email: string;
  images: FileList;
 

  constructor(private http: HttpClient,private rafahiaService:RafahiaService,private router:ActivatedRoute ,private route:Router) { }
  ngOnInit(): void {
    var mytoken = localStorage.getItem('logintoken');
    var tokenData = JSON.parse(atob(mytoken.split('.')[1]));
    var myemail = tokenData.email;
    localStorage.setItem('userEmail', myemail);
    this.email=myemail;
    console.log(myemail);
    this.serviceId=this.router.snapshot.paramMap.get('id');
   
    
  }

  onFileChange(event) {
    this.images = event.target.files;
  }

  createserviceImages() {
    const formData = new FormData();
    formData.append('companyId', this.serviceId.toString());
    formData.append('email', this.email);
    for (let i = 0; i < this.images.length; i++) {
      formData.append('images', this.images[i]);
    }

    this.http.post('https://rafahiatest.runasp.net/api/Image/ServiceImage/' + this.serviceId + '/' + this.email, formData)
      .subscribe(
        response => {
          
          alert("تمت الاضافة بنجاح");
          this.route.navigateByUrl(`/showimage/${this.serviceId}/service`);
          // Handle success response
        },
        error => {
          alert(error.message);
          // Handle error response
        }
      );
  }

 

}
