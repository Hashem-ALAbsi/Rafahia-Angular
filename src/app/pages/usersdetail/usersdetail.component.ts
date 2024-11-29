import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RafahiaService } from 'src/app/Services/rafahia.service';

@Component({
  selector: 'app-usersdetail',
  templateUrl: './usersdetail.component.html',
})
export class UsersdetailComponent {
  isloading:boolean=false;
  users!:any;
  
  userid!:any;
  allservice!: any;
  searchTerm:any;

  constructor(private rafahiaService:RafahiaService,private router:ActivatedRoute,private rout: Router){}
  ngOnInit(){
    
    this.getusersbyid();
  }
  getusersbyid(){
    this.isloading=true;
    this.userid=this.router.snapshot.paramMap.get('id');
  // alert(this.companysid);
 this.rafahiaService.getuserdetails(this.userid).subscribe((res) =>{
    console.log(res)
   this.users=res;
    // console.log(this.company);
    this.isloading=false;
  });
  }
  goBack(): void {
    this.rout.navigate(['/showclintActive']); 
  }
}
