import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import{AngularFireAuthModule} from'@angular/fire/compat/auth';
import { FlatpickrModule } from 'angularx-flatpickr';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AngularFireMessaging } from "@angular/fire/messaging";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RegesterPageComponent } from './pages/regester-page/regester-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NavbarComponent } from './pages/partials/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './pages/partials/loading/loading.component';
import { ShowalladminsComponent } from './pages/showalladmins/showalladmins.component';
import { FilterPipe } from './filter.pipe';
import { RehisterAdminComponent } from './pages/rehister-admin/rehister-admin.component';
import { ShowAllOwnersComponent } from './pages/show-all-owners/show-all-owners.component';
import { ClintActiveComponent } from './pages/Clints/clint-active/clint-active.component';
import { BlockedClintComponent } from './pages/Clints/blocked-clint/blocked-clint.component';
import { GetAllCompanyComponent } from './pages/company/get-all-company/get-all-company.component';
import { CreateCompanyComponent } from './pages/company/create-company/create-company.component';
import { UpdatecompanyComponent } from './pages/company/updatecompany/updatecompany.component';
import { TestimagesComponent } from './pages/company/testimages/testimages.component';
import { baseUrlservice } from './Services/baseUrl.service';
import { RafahiaService } from './Services/rafahia.service';
import { CreateServiceComponent } from './pages/company/companyservices/create-service/create-service.component';
import { ShowservicesComponent } from './pages/company/companyservices/showservices/showservices.component';
import { ShowservicesbyIDComponent } from './pages/company/companyservices/showservicesby-id/showservicesby-id.component';
// import { UpdateservicebyIDComponent } from './pages/company/companyservices/updateserviceby-id/updateserviceby-id.component';
import { AddimagecompanyComponent } from './pages/company/addimagecompany/addimagecompany.component';
import { ShowimagecompanyComponent } from './pages/company/showimagecompany/showimagecompany.component';
import { ShowserviceImageComponent } from './pages/company/companyservices/showservice-image/showservice-image.component';
import { AddserviceImageComponent } from './pages/company/companyservices/addservice-image/addservice-image.component';
import { ShoworderbySerIdComponent } from './pages/company/companyservices/ServicesOrders/showorderby-ser-id/showorderby-ser-id.component';
import { AllcompanyOrderComponent } from './pages/company/companyservices/allcompany-order/allcompany-order.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { AlladminsgetComponent } from './pages/alladminsget/alladminsget.component';
import { UsersdetailComponent } from './pages/usersdetail/usersdetail.component';
import { AddrolseComponent } from './pages/addrolse/addrolse.component';
import { GetallcommentComponent } from './pages/company/Comment/getallcomment/getallcomment.component';
import { CreateReportComponent } from './pages/company/Comment/create-report/create-report.component';
import { ShowReportComponent } from './pages/company/Comment/show-report/show-report.component';
import { MychartComponent } from './pages/mychart/mychart.component';
import { FormelementComponent } from './pages/formelement/formelement.component';
import { FiltercompanyPipe } from './pages/filtercompany.pipe';
import { MainOwnerComponent } from './pages/pages/main-owner/main-owner.component';
import { GetcompanyisdeletedComponent } from './pages/company/getcompanyisdeleted/getcompanyisdeleted.component';
import { ActiveuserPipe } from './pages/filters/activeuser.pipe';
import { AllownerPipe } from './pages/filters/allowner.pipe';
import { GetAdminsComponent } from './src/app/pages/Clints/get-admins/get-admins.component';
import { ShowServicesbyIDComponent } from './pages/company/companyservices/show-servicesby-id/show-servicesby-id.component';
import { ServicefilterPipe } from './pages/filters/servicefilter.pipe';
import { GetorderbyidComponent } from './pages/company/companyservices/ServicesOrders/getorderbyid/getorderbyid.component';
import { UpdateservicewithidComponent } from './pages/company/companyservices/updateservicewithid/updateservicewithid.component';
import { CreateServicePageComponent } from './pages/company/companyservices/create-service-page/create-service-page.component';
import { CalendarModule, DatePickerModule, TimePickerModule, DateRangePickerModule, DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { DataLabelService, MapsModule, MapsTooltipService } from '@syncfusion/ej2-angular-maps';
import { ActivewalleteComponent } from './pages/wallete/activewallete/activewallete.component';
import { BlockwalleteComponent } from './pages/wallete/blockwallete/blockwallete.component';
import { OwnerwalleteComponent } from './pages/wallete/ownerwallete/ownerwallete.component';
import { ClintWalletComponent } from './pages/wallete/clint-wallet/clint-wallet.component';
import { AlltranferComponent } from './pages/TransferMoney/alltranfer/alltranfer.component';
import { TransferbycompanyComponent } from './pages/TransferMoney/transferbycompany/transferbycompany.component';
import { BlockUsersComponent } from './pages/Clints/block-users/block-users.component';
import { ReportsNotshowComponent } from './pages/company/Comment/reports-notshow/reports-notshow.component';
import { ForgetpasswordComponent } from './pages/forgetpassword/forgetpassword.component';
import { OfferspageComponent } from './pages/offerspage/offerspage.component';
import { CompanydetailsComponent } from './pages/companydetails/companydetails.component';
import { ServicescompanydeleteComponent } from './pages/servicescompanydelete/servicescompanydelete.component';
import { ConfirmationemailComponent } from './pages/confirmationemail/confirmationemail.component';
// import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
// import { AngularFireModule } from '@angular/fire/compat';
// import { environment } from 'src/environments/environment';
// import { MessagingService } from './Service/messaging-service';
// import { AsyncPipe } from '@angular/common';
// // import { initializeApp } from "firebase/app";
// initializeApp(environment.firebase);
// import * as firebase from 'firebase/app-check';
// import {firebase} from 'src/environments/environment/firebase';


@NgModule({
  declarations: [
    
    AppComponent,
    HomepageComponent,
    RegesterPageComponent,
    LoginPageComponent,
    NavbarComponent,
    LoadingComponent,
    ShowalladminsComponent,
    FilterPipe,
    RehisterAdminComponent,
    ShowAllOwnersComponent,
    ClintActiveComponent,
    BlockedClintComponent,
    GetAllCompanyComponent,
    CreateCompanyComponent,
    UpdatecompanyComponent,
    TestimagesComponent,
    CreateServiceComponent,
    ShowservicesComponent,
    ShowservicesbyIDComponent,
    
    AddimagecompanyComponent,
    ShowimagecompanyComponent,
    ShowserviceImageComponent,
    AddserviceImageComponent,
    ShoworderbySerIdComponent,
    AllcompanyOrderComponent,
    AlladminsgetComponent,
    UsersdetailComponent,
    AddrolseComponent,
    GetallcommentComponent,
    CreateReportComponent,
    ShowReportComponent,
    MychartComponent,
    FormelementComponent,
    FiltercompanyPipe,
    MainOwnerComponent,
    GetcompanyisdeletedComponent,
    ActiveuserPipe,
    AllownerPipe,
    GetAdminsComponent,
    ShowServicesbyIDComponent,
    ServicefilterPipe,
    GetorderbyidComponent,
    UpdateservicewithidComponent,
    CreateServicePageComponent,
    ActivewalleteComponent,
    BlockwalleteComponent,
    OwnerwalleteComponent,
    ClintWalletComponent,
    AlltranferComponent,
    TransferbycompanyComponent,
    BlockUsersComponent,
    ReportsNotshowComponent,
    ForgetpasswordComponent,
    OfferspageComponent,
    CompanydetailsComponent,
    ServicescompanydeleteComponent,
    ConfirmationemailComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAuthModule,
    // AngularFireMessagingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TableModule,
    NgxExtendedPdfViewerModule,
    FlatpickrModule.forRoot(),
    CalendarModule, DatePickerModule, TimePickerModule, DateRangePickerModule, DateTimePickerModule, MapsModule

    
    
    
    
   

    
    
    
    
    
      
    
  ],
  providers: [
    baseUrlservice,
    RafahiaService,
    DataLabelService,
    MapsTooltipService
    // MessagingService,
    // AsyncPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
