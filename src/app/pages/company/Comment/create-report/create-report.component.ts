import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RafahiaService } from 'src/app/Services/rafahia.service';
import { CreateReportDTO } from '../../Model/createmodel';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.css']
})
export class CreateReportComponent {
  isLoading:boolean=false;
  loadingTitle:string='Loading';
  companyid:any;
  e:any[];
  com:any[];
  commitid:any;
  email:string;
  compid:any;

  constructor(private rafahiaservice:RafahiaService,private router:ActivatedRoute,private route :Router ){}

  ngOnInit(): void{
    
    
    this.commitid=this.router.snapshot.paramMap.get('id');
    var mytoken = localStorage.getItem('logintoken');
    var tokenData = JSON.parse(atob(mytoken.split('.')[1]));
    var email = tokenData.email;
    localStorage.setItem('userEmail', email);
    this.email = email;
    this.getCompanyByEmail();
}


errors:any;

Reporttext: string;

createCreport() {
  
  if (!this.Reporttext || this.Reporttext.trim() === '') {
    alert('Please enter a value for Report Text');
    return;
  }
  

 
  console.log(this.Reporttext);
  this.rafahiaservice.createReport(this.commitid,this.Reporttext)
    .subscribe(
      response => {
        alert('تم انشاء بلاغ لهذا التعليق');
       this.route.navigate([`/comment/${this.companyid}/company`]);
       
        Reporttext: '';
      
        
       
      },
      error => {
       
        
      }
    );
}
getCompanyByEmail():  void  {
  this.rafahiaservice.getCompanyEmail(this.email).subscribe(
     (res : any[]) => {
      if (res.length > 0) {

      this.com=res[0];
      for (const item of res) {
        const id = item.id;
        // console.log(id);
        this.companyid=id;

       this.e=res;
      //  console.log(res);
      //  console.log(this.companyid);
       
       
       
      }
     }
     (error) => {
      //  console.error(error);
       
     }}
   );
 }
}
