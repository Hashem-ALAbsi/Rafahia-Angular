import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RafahiaService } from 'src/app/Services/rafahia.service';
import { UpdateCompanyDTO } from '../Model/createmodel';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-updatecompany',
  templateUrl: './updatecompany.component.html',
  styleUrls: ['./updatecompany.component.css']
})
export class UpdatecompanyComponent {
  // imageFile: File | null = null;
  // emm:string='rio@gmail.com';
  companysid!: any;
  emm:string;
  company: any = {};
  isLoading: boolean = false;
  loadingTitle: string = 'Loading';
  errors: any = [];
  updateCompanyForm: FormGroup;
  photo: File=null;
  roles:any;
  admin:boolean=false;
  //ph:boolean=false;

  constructor(private rafahiaservice: RafahiaService, private router: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
    
    let loader=new Loader({
      apiKey:'AIzaSyA74hlJXliH4HaiUO3rYgMUreAKwwDU98o'
    })
    loader.load().then(() => {
      this.loadMap();
    });
    var mytoken = localStorage.getItem('logintoken');
    var tokenData = JSON.parse(atob(mytoken.split('.')[1]));
    var roles = tokenData.roles;
    localStorage.setItem('userRoles', roles);
    this.roles=roles;
    console.log(roles);
    if(roles=='Admin'){
      this.admin=true;
      console.log(this.admin)
    }
    var mytoken = localStorage.getItem('logintoken');
    var tokenData = JSON.parse(atob(mytoken.split('.')[1]));
    var email = tokenData.email;
    localStorage.setItem('userEmail', email);
    this.emm=email;
    console.log(email);
    

    this.updateCompanyForm = this.formBuilder.group({
      Email: '',
      Name: '',
      // TypeCompanyId: 1,
      
      Longtude: '',
      Latetud: '',
      AddressId: '',
      CityName:'',
      Note: '',
      Rustorant: false,
      Swimmingbool: false,
      Cooffee: false,
    })
    this.isLoading = true;
    this.companysid = this.router.snapshot.paramMap.get('id');
    console.log(this.companysid)
    this.rafahiaservice.getCompanyId(this.companysid).subscribe((res) => {
      console.log(res)
      this.company = res;
      // console.log(this.company);
      this.isLoading = false;
    });

    this.companysid = this.router.snapshot.paramMap.get('id');
    // alert(this.companysid);
    this.rafahiaservice.getcompanyid(this.companysid).subscribe((res) => {
      //console.log(res)
      this.company = res;
      // console.log(this.company);
      this.isLoading = false;
    });

  }

  update() {
    this.isLoading = true;

    // console.log(this.ph);
    var updateCompanyDTO: UpdateCompanyDTO = this.updateCompanyForm.value as UpdateCompanyDTO;
    console.log(updateCompanyDTO);
     console.log(this.photo)
    var formData = new FormData();
    formData.append('photo', this.photo);
    formData.append('createcompany', JSON.stringify(updateCompanyDTO));

    this.rafahiaservice.updatecompanybyid(formData, this.companysid).then(
      (res) => {
        this.isLoading = false;
        console.log(res);
        alert('تم التعديل بنجاح');

        this.updateCompanyForm = this.formBuilder.group({
          Email: '',
          Name: '',
          TypeCompanyId: 1,
          Longtude: '',
          Latetud: '',
          AddressId: '',
          CityName:'',
          Note: '',
          Rustorant: false,
          Swimmingbool: false,
          Cooffee: false,
        }); 
      },
      (err) => {
        this.isLoading = false;

        console.log(err.message);
        alert(err.message);
      }
    );
  }
  loadMap(): void {
    const mapElement = document.getElementById('map') as HTMLElement;
    const mapOptions = {
      center: { lat: 15.35472, lng: 44.20667 }, 
      zoom: 10,
    };
    const map = new google.maps.Map(mapElement, mapOptions);
  
    const marker = new google.maps.Marker({
      position: { lat: parseFloat(this.updateCompanyForm.get('Latetud').value), lng: parseFloat(this.updateCompanyForm.get('Longtude').value) },
      clickable: true,
      map: map,
    });
  
    google.maps.event.addListener(map, 'click', (event) => {
      const Latetud = event.latLng.lat();
      const Longtude = event.latLng.lng();
  
      map.setCenter({ lat: Latetud, lng: Longtude });
  
      marker.setPosition({ lat: Latetud, lng: Longtude });
  
      this.updateCompanyForm.patchValue({
        Latetud: Latetud.toString(),
        Longtude: Longtude.toString(),
      });
    });
  }

  selectPhoto(evt: any) {
    this.photo = evt.target.files[0];
    // this.ph=true
    }
}


