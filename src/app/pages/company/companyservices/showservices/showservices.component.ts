import { Component } from '@angular/core';
import { RafahiaService } from 'src/app/Services/rafahia.service';

@Component({
  selector: 'app-showservices',
  templateUrl: './showservices.component.html',
})
export class ShowservicesComponent {
  constructor(private rafahiaService:RafahiaService){}
  isloading:boolean=false;
  companyid!:any;
  
  imagePath:string="https://localhost:7094/api/";

  allservice!: any;
  searchTerm:any;
  searchCompany:any;
  ngOnInit()
  {
    this.getservice();
    // this.verifyImageFiles();
  }
  getservice(){
    this.rafahiaService.getallservices().subscribe((res:any)=>{
      console.log(res);
      
       

      this.allservice=res
      
     // this.img=this.allcompany.imageCompany
      this.isloading=false;
      //this.img= res.imageCompany
    })
  }
}
