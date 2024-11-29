import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';
import { RafahiaService } from 'src/app/Services/rafahia.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent  implements OnInit{
  constructor(private rafahiaservice:RafahiaService,private router:Router){}
  ngOnInit(): void {
    const imgBtn = document.querySelector('.img__btn');
    if (imgBtn) {
      imgBtn.addEventListener('click', () => {
        const cont = document.querySelector('.cont');
        if (cont) {
          cont.classList.toggle('s--signup');
        }
      });
  }}
  isLoading:boolean=false;
  loadingTitle:string='Loading';
  errors:any=[];
  isLoginscreen: boolean = false;

  email!:string
  password!:string
  responseList: any[] = [];
  rr:any[]=[];
  firstname!:string
  lastname!:string
  username!:string
  emaile!:string
  passworde!:string
  phonenumber!:string

  login(): void {
    this.rafahiaservice.loginadmins(this.email, this.password).subscribe(
      (response) => {
        console.log(response,'response');
        this.responseList.push(response);
        if (response.roles && response.roles.includes('Admin')) {
          alert('مرحبا بك'+this.email);
            this.router.navigate(['/mychart'], { queryParams: { email: this.email } });
            localStorage.setItem('logintoken',response.token);
            console.log(response.token)
            console.log(response.roles )
            
            this.rafahiaservice.dataemail(this.email);
           this.isLoading = false;
           

        } else {

          if(response.roles && response.roles.includes('Owner')){
            // this. getCompanyByEmail();
            console.log(this.rr);
             localStorage.setItem('logintoken',response.token);
           
            alert('مرحبا بك'+this.email);
          
          this.router.navigate(['/mainowner'], { queryParams: { email: this.email } });
          this.isLoginscreen=true
        }
        }
        
        
      },
      (error) => {
        // Handle login error
        console.log('Login error:', error);
        this.errors.push(error);
        alert(error.error);
      }
    );
  }


  saveadmin(){
    var inputAdmindata={
      firstname:this.firstname,
      lastname:this.lastname,
      username:this.username,
      email:this.emaile,
      password:this.passworde,
      phonenumber:this.phonenumber.toString()

    }
    this.rafahiaservice.saveOwner(inputAdmindata).subscribe({
      next:(res:any)=>{
        console.log(res,'response');
        this.responseList.push(res);
       alert(res.message);
      this.firstname='';
      this.lastname='';
      this.emaile='';
      this.username='';
      this.passworde='';
      this.phonenumber='';
      this.isLoading=false;
      alert('تم انشاء الحساب');
      this.router.navigate([`/CreateCompany`]);


      },
      error:(err:any)=>{
        this.errors=err.error.errors;
        this.isLoading=false;
        alert(err.message)

      }

    });
  }

  //  getCompanyByEmail():  void  {
  //  this.rafahiaservice.getCompanyEmail(this.email).subscribe(
  //     (res) => {
  //       this.rr=res;
  //       console.log(res);
        
  //       if (res === null){
  //         console.log('hii')
  //         this.router.navigate(['/mychart'], { queryParams: { email: this.email } });
  //       }
  //       // Handle the company response here
  //     },
  //     (error) => {
  //       console.error(error);
  //       // Handle any errors here
  //     }
  //   );
  // }
}
