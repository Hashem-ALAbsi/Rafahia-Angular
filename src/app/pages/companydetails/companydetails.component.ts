import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RafahiaService } from 'src/app/Services/rafahia.service';
import { UpdateCompanyDTO } from '../company/Model/createmodel';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.component.html',
  styleUrls: ['./companydetails.component.css']
})
export class CompanydetailsComponent {
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
  companyImages: any[]=[]; 
  services:any;
  //ph:boolean=false;

  constructor(private rafahiaservice: RafahiaService, private router: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
    
  
   
    

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
   this. getAllCompanyImages();
   this.getservicebyid();
    
    // alert(this.companysid);
    this.rafahiaservice.getcompanyid(this.companysid).subscribe((res) => {
      console.log(res)
      this.company = res;
      // console.log(this.company);
      this.isLoading = false;
    });

  }
  getAllCompanyImages() {
    this.rafahiaservice.getAllCompanyImages(this.companysid).subscribe(
      response => {
        this.companyImages = response;
        console.log('', response);
        
        // Handle success response
      },
      error => {
        console.error('Error retrieving company images', error);
        // Handle error response
      }
    );

}
getservicebyid() {
  
  
  this.rafahiaservice.getservicescompanyid(this.companysid).subscribe((res) => {
    console.log(res);
    this.services = res;
    
   
    
   
  });
}

  
}
