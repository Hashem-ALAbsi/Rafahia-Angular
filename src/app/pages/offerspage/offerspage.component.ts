import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RafahiaService } from 'src/app/Services/rafahia.service';

@Component({
  selector: 'app-offerspage',
  templateUrl: './offerspage.component.html',
  styleUrls: ['./offerspage.component.css']
})
export class OfferspageComponent {
  
  
  em!:string;
  constructor(private rafahiaservice:RafahiaService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    const mytoken = localStorage.getItem('logintoken');
  if (!mytoken) {
    this.router.navigate(['/']);
      alert('يرجى اعادة تسجيل الدخول')
  } else {
    const tokenData = JSON.parse(atob(mytoken.split('.')[1]));
    const email = tokenData.email;
    localStorage.setItem('userEmail', email);
  }
}
  isLoading:boolean=false;
loadingTitle:string='Loading';

errors:any=[];


  
  titelms!:string
  confirms!:string

  responseList: any[] = [];

  saveadmin(){
    var inputAdmindata={
     
     
      titlemessag:this.titelms,
      bobymessag:this.confirms

    }
    this.rafahiaservice.Offers(inputAdmindata).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.responseList.push(res);
        console.log(this.responseList)
      // alert(res.message);
     
     
     
      this.titelms='';
      this.confirms='';
      this.isLoading=false;
      alert('تم    ارسال العرض');
     


      },
      error:(err:any)=>{
        this.errors=err.error.errors;
        console.log(err.message,'error')
        this.isLoading=false;

      }

    });
  }


}
