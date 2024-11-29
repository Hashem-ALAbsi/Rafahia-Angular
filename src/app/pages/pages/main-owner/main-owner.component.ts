import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js/auto';
import flatpickr from 'flatpickr';
import { isEmpty } from 'rxjs';
import { RafahiaService } from 'src/app/Services/rafahia.service';
import {  DataLabelService, MapsTooltipService } from '@syncfusion/ej2-angular-maps';
import { Loader } from '@googlemaps/js-api-loader';


@Component({
  selector: 'app-main-owner',
  templateUrl: './main-owner.component.html',
  styleUrls: ['./main-owner.component.css'],
  providers: [DataLabelService, MapsTooltipService]
})
export class MainOwnerComponent implements OnInit,AfterViewInit {
  public markers: any[] = [
    { coords: [31.230391, 121.473701], name: 'Shanghai' },
    { coords: [28.704060, 77.102493], name: 'Delhi' },
    { coords: [6.524379, 3.379206], name: 'Lagos' },
    { coords: [35.689487, 139.691711], name: 'Tokyo' },
    { coords: [23.129110, 113.264381], name: 'Guangzhou' },
    { coords: [40.7127837, -74.0059413], name: 'New York' },
    { coords: [34.052235, -118.243683], name: 'Los Angeles' },
    { coords: [41.878113, -87.629799], name: 'Chicago' },
    { coords: [51.507351, -0.127758], name: 'London' },
    { coords: [40.416775, -3.703790], name: 'Madrid' }
  ];
 
  constructor(private rafahiaService:RafahiaService,private router:Router){
  }
  isloading:boolean=false;
  bo:boolean=false;
  searchTerm:any;
  
  searchCompany:any;
  companyid:any;
  orders: any;
  comments:any;
  email: string;
  datastatic:any[] = [];;
  e:any[];
  com:any[];
  currentdata:Date;
   
  

  ngOnInit(): void {
    let loader=new Loader({
      apiKey:'AIzaSyA74hlJXliH4HaiUO3rYgMUreAKwwDU98o'
    })
    loader.load().then(() => {
      this.loadMap();
    });
    // setInterval(() => {
    //   location.reload();
    // }, 60000); 
  
    // const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    // const myChart = new Chart(ctx, {
    //   type: 'line',
    //   data: {
    //     labels: [
    //       'الأحد',
    //       'الإثنين',
    //       'الثلاثاء',
    //       'الأربعاء',
    //       'الخميس',
    //       'الجمعة',
    //       'السبت'
    //     ],
    //     datasets: [{
    //       data: [
    //         15339,
    //         21345,
    //         18483,
    //         24003,
    //         23489,
    //         24092,
    //         12034
    //       ],
    //       backgroundColor: 'transparent',
    //       borderColor: '#007bff',
    //       borderWidth: 4,
    //       pointBackgroundColor: '#007bff'
    //     }]
    //   },
    //   options: {
    //     plugins: {
    //       legend: {
    //         display: false
    //       },
    //       tooltip: {
    //         boxPadding: 3
    //       }
    //     }
    //   }
    // });
  
    const mytoken = localStorage.getItem('logintoken');
    if (!mytoken) {
      this.router.navigate(['/']);
      alert('يرجى اعادة تسجيل الدخول')
    } else {
      const tokenData = JSON.parse(atob(mytoken.split('.')[1]));
      const email = tokenData.email;
      localStorage.setItem('userEmail', email);
      this.email = email;
      this.getCompanyByEmail();
      console.log(this.email);
    }
    this.currentdata=new Date()
  
    }

    ngAfterViewInit() {
      const date = new Date(Date.now() - 5 * 24 * 60 * 60 * 1000);
      const defaultDate = `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}`;
      
      flatpickr('#datetimepicker-dashboard', {
        inline: true,
        prevArrow: "<span title=\"Previous month\">&laquo;</span>",
        nextArrow: "<span title=\"Next month\">&raquo;</span>",
        defaultDate: defaultDate
      });
     
      
      
    }

    
  getCompanyByEmail():  void  {
    this.rafahiaService.getCompanyEmail(this.email).subscribe(
       (res : any[]) => {
        if (res.length > 0) {

        this.com=res[0];
        for (const item of res) {
          const id = item.id;
          console.log(id);
          this.companyid=id;

         this.e=res;
         console.log(res);
         console.log(this.companyid);
         
         
         this.getAllOrdersnotbooked();
         this.getdata();
        }
       }
       (error) => {
         console.error(error);
         
       }}
     );
   }
   getdata(){
   this.rafahiaService.getdatastaticcompany(this.companyid).subscribe(result => {
    this. datastatic.push( result);
    console.log(this.datastatic);
    this.renderChart();
    this.renderChart1();
    
    
  // this.getallcomment();
  
 
});
}
renderChart(): void {
  const ctx = document.getElementById('myChart') as HTMLCanvasElement;
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        
       
      ],
      datasets: [{
        data: this.datastatic.pop(),
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          boxPadding: 3
        }
      }
    }
  });
}
   
  
getAllOrders() {
  this.isloading = true;
  this.rafahiaService.getAllcompanyOrders(this.companyid).subscribe(
    (res: any) => {
      console.log(res);
      this.orders = res;
      this.isloading = false;
    },
    (error) => {
      console.error(error);
      this.isloading = false;
    }
  );
}
renderChart1(): void {
  const ctx = document.getElementById('myChart1') as HTMLCanvasElement;
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "This year",
       
        data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
         // Adjust the bar width (0.75 means 75% of available space)
        categoryPercentage: 0.5 // Adjust the space between bars (0.5 means 50% of available space)
      }]
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          boxPadding: 3
        }
      },
      scales: {
        y: {
          grid: {
            display: false
          },
          stacked: false,
          ticks: {
            stepSize: 100
          }
        },
        x: {
          stacked: false,
          grid: {
            color: "transparent"
          }
        }
      }
    }
  });
}
getAllOrdersnotbooked() {
 
  
  this.isloading = true;
  this.rafahiaService.getAllOrdersnotbookked(this.companyid).subscribe(
    (res: any) => {
      console.log(res);
      this.orders = res;
      this.isloading = false;
    },
    (error) => {
      console.error(error);
      this.isloading = false;
    }
  );
}
getAllOrdersisbooked() {
  this.isloading = true;
  this.rafahiaService.getAllOrdersbooked(this.companyid).subscribe(
    (res: any) => {
      console.log(res);
      this.orders = res;
      this.isloading = false;
      this.bo=true;

    },
    (error) => {
      console.error(error);
      this.isloading = false;
    }
  );
}
generatePDF(orderId: number): void {
  this.rafahiaService.generateOrderPDF(orderId);
}
acceptorder(event:any,cid:Number){
   
  if(confirm('هل انت متاكد من قبول الطلب?.. ')){
    event.target.innerText ="جاري المعالجه....";
  this.rafahiaService.acceptorder(cid).subscribe((res:any)=>{

      console.log(cid);
      //console.log(cemail);
      console.log(res);
      console.log(res.Message);
      this.getAllOrdersnotbooked();
     
    },
    (err:any)=>{
      alert(err.Message);

    });
  }

}
deleteorder(event:any,cid:Number){
   
  if(confirm('هل انت متاكد من رفض الطلب?.. ')){
    event.target.innerText ="جاري المعالجه....";
  this.rafahiaService.cancelorder(cid).subscribe((res:any)=>{

      console.log(cid);
      //console.log(cemail);
      console.log(res);
      console.log(res.Message);
      this.getAllOrdersisbooked();
     
    },
    (err:any)=>{
      alert(err.Message);

    });
  }

}
loadMap(): void {
  const mapElement = document.getElementById("map") as HTMLElement;
  const mapOptions = {
    center: { lat: 15.35472, lng: 44.20667 }, // Set your desired initial map center
    zoom: 18
  };
  const map = new google.maps.Map(mapElement, mapOptions);

  // this.res.forEach((company) => {
    // console.log(company);
    // const { latitude, longitude } = company;
    const marker = new google.maps.Marker({
      position: { lat: parseFloat(this.e[6]), lng: parseFloat(this.e[7]) },
      clickable: true,
      map: map,
      // title: company.name // Use any property from the company object as the marker title
    });
    
    google.maps.event.addListener(map, 'click', function(event) {
      const latitude = event.latLng.lat();
      const longitude = event.latLng.lng();
    
      // تعيين قيمة الطول والعرض للخريطة
      map.setCenter({ lat: latitude, lng: longitude });
    
      // تحديث موقع العلامة
      marker.setPosition({ lat: latitude, lng: longitude });
      console.log(longitude)
    });
    
    
    
}
}
