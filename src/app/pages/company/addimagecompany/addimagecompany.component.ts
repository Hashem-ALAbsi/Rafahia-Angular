import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

import { RafahiaService } from 'src/app/Services/rafahia.service';

@Component({
  selector: 'app-addimagecompany',
  templateUrl: './addimagecompany.component.html',
})
export class AddimagecompanyComponent implements OnInit{
  companyId: any;
  email: string;
  
  images: FileList;

  constructor(private rafahiaService:RafahiaService,private router:ActivatedRoute,private route:Router) { }
  ngOnInit(): void {
    this.companyId = this.router.snapshot.paramMap.get('id');
    var mytoken = localStorage.getItem('logintoken');
    var tokenData = JSON.parse(atob(mytoken.split('.')[1]));
    var myemail = tokenData.email;
    localStorage.setItem('userEmail', myemail);
    this.email=myemail;
    console.log(myemail);

  }

  onFileChange(event) {
    this.images = event.target.files;
  }

  createCompanyImages() {
    const formData = new FormData();
    formData.append('companyId', this.companyId.toString());
    formData.append('email', this.email);
    for (let i = 0; i < this.images.length; i++) {
      formData.append('images', this.images[i]);
    }
      
    this.rafahiaService.createcompanyImage(this.companyId,this.email,formData)
      .subscribe(
        response => {
         
          alert("تم الاضافة بنجاح");
          this.route.navigateByUrl(`/showimage/${this.companyId}/company`);
          // Handle success response
        },
        error => {
        
          alert(error.message);
          // Handle error response
        }
      );
  }
 
  }

