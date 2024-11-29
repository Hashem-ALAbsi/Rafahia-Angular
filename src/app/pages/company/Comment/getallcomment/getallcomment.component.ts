import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RafahiaService } from 'src/app/Services/rafahia.service';

@Component({
  selector: 'app-getallcomment',
  templateUrl: './getallcomment.component.html',
  styleUrls: ['./getallcomment.component.css']
})
export class GetallcommentComponent {
  isloading:boolean=false;
  searchTerm:any;
  companyid:any;
  searchCompany:any;
  
  comments:any;
  constructor(private router:ActivatedRoute,private rafahiaService:RafahiaService) { }
  ngOnInit(){
    this.companyid=this.router.snapshot.paramMap.get('id');
    this.getallcomment();
  }
  getallcomment(){
    this.isloading=true;
    this.rafahiaService.getCommentcompany(this.companyid).subscribe((res:any)=>{
      // console.log(res);
      
       

      this.comments=res
      
    
      this.isloading=false;
    })
  }
}
