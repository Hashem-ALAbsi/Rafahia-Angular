import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RafahiaService } from 'src/app/Services/rafahia.service';
import { CreateServiceDTO } from '../../Model/createmodel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-service-page',
  templateUrl: './create-service-page.component.html',
  styleUrls: ['./create-service-page.component.css']
})
export class CreateServicePageComponent {
  
  isLoading: boolean = false;
  loadingTitle: string = 'Loading';
  createserviceForm: FormGroup;
  photo: File;
  email:string;
  e:any[];
  com:any[];
  companyid:any;

  constructor(private formBuilder: FormBuilder,
    private rafahiaService: RafahiaService,private route:Router) { }
  ngOnInit(): void {
    var mytoken = localStorage.getItem('logintoken');
    var tokenData = JSON.parse(atob(mytoken.split('.')[1]));
    var email = tokenData.email;
    localStorage.setItem('userEmail', email);
    this.email=email;
    this.getCompanyByEmail();
    
    this.createserviceForm = this.formBuilder.group({
      Email: '',
      Name: '',
      Number: '',
      NumberPeople:'',
      Price: '',
      Description: ''

    })
  }
  save() {
    this.isLoading = true;
    console.log(this.photo);
    var createserviceDTO: CreateServiceDTO = this.createserviceForm.value as CreateServiceDTO;
    console.log(createserviceDTO);
    var formData = new FormData();
    formData.append('photo', this.photo);
    formData.append('createservice', JSON.stringify(createserviceDTO));
    this.rafahiaService.createservice(formData).then(
      res => {
        this.isLoading = false;
        console.log(res);
        alert('تم انشاء خدمة بنجاح');
        this.route.navigateByUrl(`/show/${this.companyid}/Service`);

        this.createserviceForm = this.formBuilder.group({
          Email: '',
          Name: '',
          Number: '',
          NumberPeople:'',
          Price: 0,
          Description: ''
        })
      },
      err => {
        this.isLoading = false;

        console.log(err.message);
        alert(err.message);
      }
    )


  }
  selectphoto(evt: any) {
    this.photo = evt.target.files[0]

  }
  getCompanyByEmail():  void  {
    this.rafahiaService.getCompanyEmail(this.email).subscribe(
       (res : any[]) => {
        if (res.length > 0) {

        this.com=res[0];
        for (const item of res) {
          const id = item.id;
          console.log(id);
          this.companyid=id;

         this.e=res;
         console.log(res);
         console.log(this.companyid);
         
         
        }
       }
       (error) => {
         console.error(error);
         
       }}
     );
   }


}
