import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RafahiaService } from 'src/app/Services/rafahia.service';
import { UpdateServiceDTO } from '../../Model/createmodel';

@Component({
  selector: 'app-updateservicewithid',
  templateUrl: './updateservicewithid.component.html',
  styleUrls: ['./updateservicewithid.component.css']
})
export class UpdateservicewithidComponent {
  
  isLoading:boolean=false;
  ph:boolean=false;
  loadingTitle:string='Loading';
  errors:any=[];
  serviceid!:any;
  service!:any;
  updateserviceForm:FormGroup;
  photo:File;
  constructor(private rafahiaservice:RafahiaService,private router:ActivatedRoute,private formBuilder:FormBuilder){}
  ngOnInit(){
    this.updateserviceForm = this.formBuilder.group({
      Email: '',
      Name: '',
      Number:'',
      NumberPeople:'',
      Price:0,
      Description:''
     
    })
    this.isLoading=true;
    
  
    this.serviceid=this.router.snapshot.paramMap.get('id');
    // alert(this.companysid);
   this.rafahiaservice.getservicebyid(this.serviceid).subscribe((res) =>{
      console.log(res)
     this.service=res;
     console.log(this.service);
      // console.log(this.company);
      this.isLoading=false;
    });
  

}
save(){
  this.isLoading=true;
  
  var updateserviceDTO:UpdateServiceDTO=this.updateserviceForm.value as UpdateServiceDTO;
  console.log(updateserviceDTO);
  console.log(this.ph)
    var formData = new FormData();
    formData.append('photo',this.photo);
    formData.append('createservice',JSON.stringify(updateserviceDTO));
    this.rafahiaservice.updateservidebyid(formData ,this.serviceid).then(
      res=>{
        this.isLoading=false;
        console.log(res);
        alert('تم تعديل خدمة بنجاح');

        this.updateserviceForm=this.formBuilder.group({
          Email:'',
          Name:'',
          Number:'',
          NumberPeople:'',
          Price:0,
          Description:''
        })
      },
      err=>{
        this.isLoading=false;

        console.log(err.message);
        alert('يرجى اضافة صورة ');
      }
    )


 }
 selectphoto(evt:any){
   this.photo=evt.target.files[0]
   this.ph=true;

}


}
