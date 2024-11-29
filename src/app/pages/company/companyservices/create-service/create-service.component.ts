import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { RafahiaService } from 'src/app/Services/rafahia.service';
import { CreateServiceDTO } from '../../Model/createmodel';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
})
export class CreateServiceComponent {
  isLoading: boolean = false;
  loadingTitle: string = 'Loading';
  createserviceForm: FormGroup;
  photo: File;
  email:string;

  constructor(private formBuilder: FormBuilder,
    private rafahiaService: RafahiaService) { }
  ngOnInit(): void {
    var mytoken = localStorage.getItem('logintoken');
    var tokenData = JSON.parse(atob(mytoken.split('.')[1]));
    var email = tokenData.email;
    localStorage.setItem('userEmail', email);
    this.email=email;
    
    this.createserviceForm = this.formBuilder.group({
      Email: '',
      Name: '',
      Number: '',
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

        this.createserviceForm = this.formBuilder.group({
          Email: '',
          Name: '',
          Number: '',
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
}
