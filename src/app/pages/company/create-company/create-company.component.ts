import { Binary } from '@angular/compiler';
import { Component, OnInit, PlatformRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RafahiaService } from 'src/app/Services/rafahia.service';
import { CreateCompanyDTO } from '../Model/createmodel';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  isLoading:boolean=false;
  loadingTitle:string='Loading';
  createcompanyForm:FormGroup;
  photo:File;
  email:any;
  Latetud:string;
  Longtude:string;
 res:any[]=[];
 rr :any;
  
  constructor(private formBuilder:FormBuilder,
    private rafahiaService:RafahiaService,private router:Router,private route:ActivatedRoute){}
  ngOnInit(): void{
    this.email = this.route.snapshot.paramMap.get('email');

    let loader=new Loader({
      apiKey:'AIzaSyA74hlJXliH4HaiUO3rYgMUreAKwwDU98o'
    })
    loader.load().then(() => {
      this.loadMap();
    });
    
    // var mytoken = localStorage.getItem('logintoken');
    // var tokenData = JSON.parse(atob(mytoken.split('.')[1]));
    // var email = tokenData.email;
    // localStorage.setItem('userEmail', email);
    // this.email=email;
    this.createcompanyForm=this.formBuilder.group({
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

    })

  }
  // save(){
  //   this.isLoading=true;
  //   console.log(this.rr[1]);
  //   var createCompanyDTO:CreateCompanyDTO=this.createcompanyForm.value as CreateCompanyDTO;
  //   console.log(createCompanyDTO);
  //   var formData = new FormData();
  //   formData.append('photo',this.photo);
  //   formData.append('createcompany',JSON.stringify(createCompanyDTO));
  //   this.rafahiaService.create(formData).then(
  //     res =>{
  //       this.isLoading=false;
  //       console.log(res);
  //       alert('تم انشاء شركة بنجاح');

  //       this.createcompanyForm=this.formBuilder.group({
  //         Email:'',
  //         Name:'',
  //         TypeCompanyId:1,
  //         Longtude:'',
  //         Latetud:'',
  //         AddressId:5,
  //         Note:'',
  //         Rustorant:false,
  //         Swimmingbool:false,
  //         Cooffee:false
    
  //       });
  //       this.router.navigate(['/']);

  //     },
  //     err=>{
  //       this.isLoading=false;

  //       console.log(err.message);
  //       alert(err.message);
  //     }
  //   );
  // }
  save() {
    this.isLoading = true;
    var createCompanyDTO: CreateCompanyDTO = this.createcompanyForm.value as CreateCompanyDTO;
    var formData = new FormData();
    formData.append('photo', this.photo);
    formData.append('createcompany', JSON.stringify(createCompanyDTO));
    this.rafahiaService.create(formData).then(
      (res) => {
        this.isLoading = false;
        console.log(res);
        alert('تم انشاء شركة بنجاح');
  
        this.createcompanyForm = this.formBuilder.group({
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
        this.router.navigate(['/']);
      },
      (err) => {
        this.isLoading = false;
        console.log(err.message);
        alert(err.message);
      }
    );
  }
  
  selectphoto(evt:any){
    this.photo=evt.target.files[0]

  }
  loadMap(): void {
    const mapElement = document.getElementById('map') as HTMLElement;
    const mapOptions = {
      center: { lat: 15.35472, lng: 44.20667 }, 
      zoom: 10,
    };
    const map = new google.maps.Map(mapElement, mapOptions);
  
    const marker = new google.maps.Marker({
      position: { lat: parseFloat(this.createcompanyForm.get('Latetud').value), lng: parseFloat(this.createcompanyForm.get('Longtude').value) },
      clickable: true,
      map: map,
    });
  
    google.maps.event.addListener(map, 'click', (event) => {
      const Latetud = event.latLng.lat();
      const Longtude = event.latLng.lng();
  
      map.setCenter({ lat: Latetud, lng: Longtude });
  
      marker.setPosition({ lat: Latetud, lng: Longtude });
  
      this.createcompanyForm.patchValue({
        Latetud: Latetud.toString(),
        Longtude: Longtude.toString(),
      });
    });
  }

//   constructor(private rafahiaservice:RafahiaService,private route:ActivatedRoute){}
//   em!:string;

//   ngOnInit(): void {
//     this.route.queryParams.subscribe(params => {
//      // const email = params['email'];
//       this.em=params['email'];
//       console.log(this.em);
//     });
//   }

//   isLoading:boolean=false;
//   loadingTitle:string='Loading';
  
//   errors:any=[];

//   Email!:string
//   Name!:string
//   TypeCompanyId!:number
//   Longitude!:string
//   Latetud!:string
//   AddressId!:any
//   Note!:string
//   Rustorant:boolean=false
//   Swimmingbool:boolean=false
//   Cooffee:boolean=false
//   ImageCompany:any=[]=[];
//   responseList: any[] = [];

//    imageFile!: File ;
//    selectedFile: Blob | null = null;

//    fileselect(event:any){
//     this.imageFile=<File>event.target.files[0];
//    }

//  saveadmin() {
//   try {
//     var inputcompanydata = {
//       Email: this.Email,
//       Name: this.Name,
//       TypeCompanyId: this.TypeCompanyId,
//       Longitude: this.Longitude,
//       Latetud: this.Latetud,
//       AddressId: this.AddressId,
//       Note: this.Note,
//       Rustorant: this.Rustorant,
//       Swimmingbool: this.Swimmingbool,
//       Cooffee: this.Cooffee,
//      // ImageCompany: this.ImageCompany
      
//     };
//   //   const formData = new FormData();
 

//     this.rafahiaservice.savecompany(inputcompanydata,this.imageFile).subscribe(
//       (res: any) => {
//         // console.log(res, 'response');
//         console.log(res);
//         console.log(res.imageCompany);
//         this.responseList.push(res);
//        // console.log(this.responseList);
//         alert(res.message);

//         this.isLoading = false;
//       },
//       (err: any) => {
//         this.errors = err.error;
//         console.log(this.errors)
//         // if (err.status === 422) {
//         //   this.errors = err.error;
//         //   console.log(this.errors, 'error');
//         // } else {
//         //   console.error('Error creating facility:', err);
//         // }
//         this.isLoading = false;
//       }
//     );

//   } catch (error) {
//     console.error('An error occurred:', error);
//     // Handle the error as needed
//   }
// }
// // onFileChange(event: any) {
// //   const file = event.target.files[0];
// //   this.imageFile = file;
// // }
//   // handleImageUpload(event: any): void {
//   //   const file = event.target.files[0]; // Get the selected file

//   // if (file) {
//   //   const reader = new FileReader();

//   //   reader.onload = (e: any) => {
//   //     const imageDataUrl = e.target.result;

//   //     const imgElement = document.createElement('img');
//   //     imgElement.src = imageDataUrl;
//   //     document.body.appendChild(imgElement);
//   //   };

//   //   reader.readAsDataURL(file); 
//   // }
    
//   // }


}
