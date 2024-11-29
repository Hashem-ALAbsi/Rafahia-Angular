import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RafahiaService } from 'src/app/Services/rafahia.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {
  
  em!:string;
  constructor(private rafahiaservice:RafahiaService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    const mytoken = localStorage.getItem('logintoken');
    if (!mytoken) {
      this.router.navigate(['/']);
        alert('يرجى اعادة تسجيل الدخول')
    } else {
      const tokenData = JSON.parse(atob(mytoken.split('.')[1]));
      this. em = tokenData.email;
      localStorage.setItem('userEmail', this.em);
    }
  
  }
  isLoading:boolean=false;
loadingTitle:string='Loading';

errors:any=[];


  email!:string
  password!:string
  confirm!:string

  responseList: any[] = [];

  saveadmin(){
    var inputAdmindata={
     
      email:this.em,
      NewPass:this.password,
      ConfirmNewPass:this.confirm

    }
    this.rafahiaservice.passwordforget(inputAdmindata).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.responseList.push(res);
        console.log(this.responseList)
      // alert(res.message);
     
      this.email='';
     
      this.password='';
      this.confirm='';
      this.isLoading=false;
      alert('تم  تغيير كلمة المرور');
      this.router.navigate(['/mainowner']);
      
     


      },
      error:(err:any)=>{
        this.errors=err.error.errors;
        console.log(err.error.errors,'error')
        this.isLoading=false;

      }

    });
  }


}
