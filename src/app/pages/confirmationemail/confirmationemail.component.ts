import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RafahiaService } from 'src/app/Services/rafahia.service';

@Component({
  selector: 'app-confirmationemail',
  templateUrl: './confirmationemail.component.html',
  styleUrls: ['./confirmationemail.component.css']
})
export class ConfirmationemailComponent implements OnInit{
  email:any;
  constructor(private adminservice:RafahiaService,private router:ActivatedRoute,private route:Router){}

  ngOnInit(): void {
    this.email = this.router.snapshot.paramMap.get('id');

    this.getemailconfirmation();
  }
  getemailconfirmation(){
   
    this.adminservice.replayemailconfirmation(this.email).subscribe((res:any)=>{
      console.log(res);
      
       

     
      // this.initializeDataTable();
     // this.img=this.allcompany.imageCompany
      
      //this.img= res.imageCompany
    });
  }

}
