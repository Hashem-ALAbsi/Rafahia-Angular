import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RafahiaService } from './Services/rafahia.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emm!: string;
  email:string;
  message:any;
  constructor(private router: Router, private rafahiaservice: RafahiaService ) { }
  title = 'rafahia2';
  ngOnInit() {
    this.rafahiaservice.mydtaa.subscribe((res) => {
      this.emm = res;
      var mytoken = localStorage.getItem('logintoken');
      var tokenData = JSON.parse(atob(mytoken.split('.')[1]));
      var email = tokenData.email;
      this.email=email;
      localStorage.setItem('userEmail', email);
     
    })
  }
  shouldShowNavbar(): boolean {
    // Determine if the current route is the login route
    const hiddenRoutes = ['/', '/regester','/CreateCompany'];
    return !hiddenRoutes.includes(this.router.url);

  }
  hidetopandSidebar(): boolean {
    const hidetopandSidebar = ['/'];
    return !hidetopandSidebar.includes(this.router.url);
  }
  title1 = 'angular16';
  //Sidebar toggle show hide function
  status = false;
  addToggle() {
    this.status = !this.status;
  }

}
