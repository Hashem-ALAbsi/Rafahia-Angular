import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader';
import { Chart, registerables } from 'node_modules/chart.js';
import { RafahiaService } from 'src/app/Services/rafahia.service';
Chart.register(...registerables);

@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.css']
})
export class MychartComponent  implements OnInit{
chartdata: any;
labeldata: any[] = [];
res:any[]=[];
lab:any;

latitude:any;
longitude:any;

constructor(private rafahiaService: RafahiaService,private router:Router) {}

ngOnInit() {
  var mytoken = localStorage.getItem('logintoken');
  if (mytoken) {
    var tokenData = JSON.parse(atob(mytoken.split('.')[1]));
    var roles = tokenData.roles;
    localStorage.setItem('userRoles', roles);
    console.log(roles);
  } else {
    this.router.navigate(['/']);
      alert('يرجى اعادة تسجيل الدخول')
    
    console.log('No login token found');
  }

  let loader=new Loader({
    apiKey:'AIzaSyA74hlJXliH4HaiUO3rYgMUreAKwwDU98o'
  })
  loader.load().then(() => {
    // this.get();
    this.loadMap();
  });

  
  this.get();
  
  this.rafahiaService.getdatastatic().subscribe(result => {
    this.chartdata = result;
    this.lab=result;
    console.log(this.lab);
    console.log(this.chartdata);
    this.labeldata = Object.keys(this.chartdata);
    this.RenderChart();
    this.RenderpieChart();
  });
}

RenderChart() {
  const labels = [ 'clientactive', 'clientlocked', 'company', 'companyisdeleted', 'order', 'ordercancel', 'useractive', 'userlocked'];
  const values = labels.map(label => this.chartdata[label]);

  new Chart("barchart", {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: '# عدد',
        data: values,
        backgroundColor: ['#134569', '#36999b', '#5c7676', '#7988ad', '#ff6384', '#467194de', '#62c9d3de', '#d3d262de'],
        borderColor: 'white', // Set the color of the label text
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          labels: {
            color: '#467194'
          }
        }
      }
    }
  });
}
RenderpieChart() {
  const labels = ['clientactive', 'clientlocked', 'company', 'companyisdeleted', 'order', 'ordercancel', 'useractive', 'userlocked'];
  const values = labels.map(label => this.chartdata[label]);

  new Chart("piechart", {
    type: 'pie',
    data: {
      labels: labels,
      
      datasets: [{
        label: '#عدد',
        data: values,
        backgroundColor: ['#36a2eb', '#134569', '#36999b', '#5c7676', '#7988ad', '#ff6384', '#d3d262de', '#ffce56'], // Set custom colors for each segment
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
        legend: {
          labels: {
            color: '#467194'
          }
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const label = labels[context.dataIndex];
              const value = values[context.dataIndex];
             
              return label + ": " + value;
              
            }
          }
        }
      }
    }
  });
}
get(): void {
  this.rafahiaService.getallcompany().subscribe(
    (result) => {
     
      this.res.push(result); // Assuming the API response is an array of companies
      this.loadMap();
    },
    (error) => {
      console.error('Failed to fetch company data:', error);
    }
  );
}

loadMap(): void {
  const mapElement = document.getElementById("map") as HTMLElement;
  const mapOptions = {
    center: { lat: 15.35472, lng: 44.20667 }, // Set your desired initial map center
    zoom: 1
  };
  const map = new google.maps.Map(mapElement, mapOptions);

  // this.res.forEach((company) => {
    // console.log(company);
    // const { latitude, longitude } = company;
    const marker = new google.maps.Marker({
      position: { lat: parseFloat(this.latitude), lng: parseFloat(this.longitude) },
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
