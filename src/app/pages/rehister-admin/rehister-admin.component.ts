import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RafahiaService } from 'src/app/Services/rafahia.service';

@Component({
  selector: 'app-rehister-admin',
  templateUrl: './rehister-admin.component.html',
  styleUrls: ['./rehister-admin.component.css']
})
export class RehisterAdminComponent {
  em!:string;
  constructor(private rafahiaservice:RafahiaService,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
     // const email = params['email'];
      // this.em=params['email'];
      console.log(this.em);
      // Use the email as needed in the registerAdmin component
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
    this.rafahiaservice.saveAdmin(inputAdmindata).subscribe({
      next:(res:any)=>{
        console.log(res,'response');
        this.responseList.push(res);
        console.log(this.responseList)
        alert(res.message);
      this.firstname='';
      this.lastname='';
      this.email='';
      this.username='';
      this.password='';
      this.phonenumber='';
      this.isLoading=false;

      },
      error:(err:any)=>{
        this.errors=err.error.errors;
        console.log(err.error.errors,'error')
        this.isLoading=false;

      }

    });
  }
}
