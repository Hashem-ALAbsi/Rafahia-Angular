import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RafahiaService } from 'src/app/Services/rafahia.service';

@Component({
  selector: 'app-regester-page',
  templateUrl: './regester-page.component.html',
  styleUrls: ['./regester-page.component.css']
})
export class RegesterPageComponent {
  em!:string;
  constructor(private rafahiaservice:RafahiaService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    console.log(localStorage.getItem('logintoken'))
    this.route.queryParams.subscribe(params => {
     // const email = params['email'];
      this.em=params['email'];
      console.log(this.em);
    });
  }
  isLoading:boolean=false;
loadingTitle:string='Loading';

errors:any=[];

  firstname!:string
  lastname!:string
  username!:string
  email!:string
  password!:string
  phonenumber!:string

  responseList: any[] = [];

  saveadmin(){
    
    var inputAdmindata={
      firstname:this.firstname,
      lastname:this.lastname,
      username:this.username,
      email:this.email,
      password:this.password,
      phonenumber:this.phonenumber.toString()

    }
    this.rafahiaservice.saveOwner(inputAdmindata).subscribe({
      next:(res:any)=>{
        console.log(res,'response');
        this.responseList.push(res);
        console.log(this.responseList)
      // alert(res.message);
      this.firstname='';
      this.lastname='';
      this.email='';
      this.username='';
      this.password='';
      this.phonenumber='';
      this.isLoading=false;
      alert('تم انشاء الحساب');
      this.router.navigate(['/CreateCompany']);


      },
      error:(err:any)=>{
        this.errors=err.error.errors;
       alert(err.message)
        this.isLoading=false;

      }

    });
  }
  
}
