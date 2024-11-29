import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RafahiaService } from 'src/app/Services/rafahia.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  emm!: string;
  roles: string;
  em!: string;
  email: string;
  companyid: any;
  e: any[];
  com: any[];
  mytoken: any;
  constructor(private rafahiaservice: RafahiaService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    mytoken = localStorage.getItem('logintoken');
    var tokenData = JSON.parse(atob(mytoken.split('.')[1]));
    var roles = tokenData.roles;
    localStorage.setItem('userRoles', roles);
    this.roles = roles;
    console.log(roles);
    var mytoken = localStorage.getItem('logintoken');
    var tokenData = JSON.parse(atob(mytoken.split('.')[1]));
    var email = tokenData.email;
    localStorage.setItem('userEmail', email);
    this.email = email;
    this.getCompanyByEmail();
    console.log(localStorage)



    this.rafahiaservice.mydtaa.subscribe((res) => {
      this.emm = res;
    })
    // this.route.queryParams.subscribe(params => {
    //   // const email = params['email'];
    //   this.em = params['email'];
    //   // console.log(this.em);

    // });
  }
  title1 = 'angular16';
  //Sidebar toggle show hide function
  status = false;
  addToggle() {
    this.status = !this.status;
  }


  shouldShowElement(): boolean {
    // Check if the roles include 'Owner'
    return !(this.roles && this.roles.includes('Owner'));
  }
  getCompanyByEmail(): void {
    this.rafahiaservice.getCompanyEmail(this.email).subscribe(
      (res: any[]) => {
        if (res.length > 0) {

          this.com = res[0];
          for (const item of res) {
            const id = item.id;
            console.log(id);
            this.companyid = id;

            this.e = res;
            console.log(res);
            console.log(this.companyid);
          }
        }
        (error) => {
          console.error(error);

        }
      }
    );
  }
  logout(event: Event) {

    event.preventDefault();

    localStorage.removeItem('logintoken');
    localStorage.removeItem('userRoles');
    localStorage.removeItem('userEmail');

    window.close();

    this.router.navigate(['/']);
    console.log(this.mytoken)
  }



}
