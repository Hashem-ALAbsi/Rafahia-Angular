import { Component ,OnDestroy, OnInit} from '@angular/core';
import { RafahiaService } from 'src/app/Services/rafahia.service';
import 'datatables.net';

@Component({
  selector: 'app-getcompanyisdeleted',
  templateUrl: './getcompanyisdeleted.component.html',
  styleUrls: ['./getcompanyisdeleted.component.css']
})
export class GetcompanyisdeletedComponent implements OnInit{
  constructor(private adminservice:RafahiaService){}
  
  isloading:boolean=false;
    companyid!:any;
    page:number=1;
    count: number=0;
    tablesize:number=10;
    tablesSizes:any=[10,15,20];
    email:string;
     datatable:any;
     apidata:any;
    
     selectedOpportunity: any;

    allcompany!: any;
    searchcompany:any='';
    ngOnInit()
    {
      
      this.getallcompanys();
      var mytoken = localStorage.getItem('logintoken');
      var tokenData = JSON.parse(atob(mytoken.split('.')[1]));
      var myemail = tokenData.email;
      localStorage.setItem('userEmail', myemail);
      this.email=myemail;
     
    }

    getallcompanys(){
      this.isloading=true;
      this.adminservice.getallcompanyisdelete().subscribe((res:any)=>{
        console.log(res);
        
         

        this.apidata=res;
        this.allcompany=res
        // this.initializeDataTable();
       // this.img=this.allcompany.imageCompany
        this.isloading=false;
        //this.img= res.imageCompany
      });
    }
    // initializeDataTable(): void {
    //   this.datatable = $('#example').DataTable({
    //     data: this.allcompany,
    //     columns: [
    //       { title: 'Id', data: 'id' },
    //       { title: 'Name', data: 'name' },
    //       { title: 'Type', data: 'typeCompanyName' },
    //       { title: 'Longitude', data: 'longtude' },
    //       { title: 'Latitude', data: 'latetud' },
    //       { title: 'Address', data: 'addressName' },
    //       { title: 'City', data: 'cityName' },
    //       { title: 'Note', data: 'note' },
    //       { title: 'Restaurant', data: 'rustorant' },
    //       { title: 'Swimming Pool', data: 'swimmingbool' },
    //       { title: 'Coffee', data: 'cooffee' },
    //       { title: 'Image', data: 'imageCompany', render: (data: any) => `<img class="img-responsive img-thumbnail" src="${data}" style="width:70px;height:70px">` },
          
    //     ]
    //   });
    
    //   // Handle search input
    //   const searchInput = $('#searchInput');
    //   searchInput.on('keyup', () => {
    //     this.datatable.search(searchInput.val()).draw();
    //   });
    // }
    // ngOnDestroy(): void {
    //   if (this.datatable) {
    //     this.datatable.destroy();
    //   }
    // }
   
    
     
    deletecompany(event:any,cid:Number,Email:string){
      if(confirm('هل انت متاكد من حذف الشركه?.. ')){
        event.target.innerText ="جار الحذف....";
      this.adminservice.deletecompany(cid,this.email).subscribe((res:any)=>{

          console.log(cid);
          //console.log(cemail);
          console.log(res);
          console.log(res.Message);
          this.getallcompanys();
         
        },
        (err:any)=>{
          alert(err);
          console.log(err.Message);

        });
      }
    }
    onTableDatachange(event:any){
      this.page=event;
      this.getallcompanys();

    }
    onTableSizechange(event:any): void{
      this.tablesize=event.target.value;

      this.page=1;
      this.getallcompanys();

    }

}
