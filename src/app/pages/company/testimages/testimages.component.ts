import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreateCompanyDTO } from '../Model/createmodel';
import { RafahiaService } from 'src/app/Services/rafahia.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-testimages',
  templateUrl: './testimages.component.html',
  
})
export class TestimagesComponent  implements OnInit{
  isLoading:boolean=false;
  loadingTitle:string='Loading';
  createcompanyForm:FormGroup;
  photo:File;
  email:any;
  
  constructor(private formBuilder:FormBuilder,
    private rafahiaService:RafahiaService,private router:Router){}
  ngOnInit(): void{
    // var mytoken = localStorage.getItem('logintoken');
    // var tokenData = JSON.parse(atob(mytoken.split('.')[1]));
    // var email = tokenData.email;
    // localStorage.setItem('userEmail', email);
    // this.email=email;
    this.createcompanyForm=this.formBuilder.group({
      Email:'',
      Name:'',
      TypeCompanyId:1,
      Longtude:'',
      Latetud:'',
      AddressId:1,
      Note:'',
      Rustorant:false,
      Swimmingbool:false,
      Cooffee:false

    })

  }
  save(){
    this.isLoading=true;
    console.log(this.photo);
    var createCompanyDTO:CreateCompanyDTO=this.createcompanyForm.value as CreateCompanyDTO;
    console.log(createCompanyDTO);
    var formData = new FormData();
    formData.append('photo',this.photo);
    formData.append('createcompany',JSON.stringify(createCompanyDTO));
    this.rafahiaService.create(formData).then(
      res =>{
        this.isLoading=false;
        console.log(res);
        alert('تم انشاء شركة بنجاح');

        this.createcompanyForm=this.formBuilder.group({
          Email:'',
          Name:'',
          TypeCompanyId:1,
          Longtude:'',
          Latetud:'',
          AddressId:5,
          Note:'',
          Rustorant:false,
          Swimmingbool:false,
          Cooffee:false
    
        });
        this.router.navigate(['/']);

      },
      err=>{
        this.isLoading=false;

        console.log(err.message);
        alert(err.message);
      }
    );
  }
  selectphoto(evt:any){
    this.photo=evt.target.files[0]

  }
 

}


