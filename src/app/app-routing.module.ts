import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RegesterPageComponent } from './pages/regester-page/regester-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ShowalladminsComponent } from './pages/showalladmins/showalladmins.component';
import { RehisterAdminComponent } from './pages/rehister-admin/rehister-admin.component';
import { ShowAllOwnersComponent } from './pages/show-all-owners/show-all-owners.component';
import { ClintActiveComponent } from './pages/Clints/clint-active/clint-active.component';
import { GetAllCompanyComponent } from './pages/company/get-all-company/get-all-company.component';
import { CreateCompanyComponent } from './pages/company/create-company/create-company.component';
import { UpdatecompanyComponent } from './pages/company/updatecompany/updatecompany.component';
import { TestimagesComponent } from './pages/company/testimages/testimages.component';
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
import { AlladminsgetComponent } from './pages/alladminsget/alladminsget.component';
import { UsersdetailComponent } from './pages/usersdetail/usersdetail.component';
import { AddrolseComponent } from './pages/addrolse/addrolse.component';
import { GetallcommentComponent } from './pages/company/Comment/getallcomment/getallcomment.component';
import { CreateReportComponent } from './pages/company/Comment/create-report/create-report.component';
import { ShowReportComponent } from './pages/company/Comment/show-report/show-report.component';
import { MychartComponent } from './pages/mychart/mychart.component';
import { MainOwnerComponent } from './pages/pages/main-owner/main-owner.component';
import { GetcompanyisdeletedComponent } from './pages/company/getcompanyisdeleted/getcompanyisdeleted.component';
import { BlockedClintComponent } from './pages/Clints/blocked-clint/blocked-clint.component';
import { ShowServicesbyIDComponent } from './pages/company/companyservices/show-servicesby-id/show-servicesby-id.component';
import { GetorderbyidComponent } from './pages/company/companyservices/ServicesOrders/getorderbyid/getorderbyid.component';
import { UpdateservicewithidComponent } from './pages/company/companyservices/updateservicewithid/updateservicewithid.component';
import { CreateServicePageComponent } from './pages/company/companyservices/create-service-page/create-service-page.component';
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

const routes: Routes = [
  {path:'',component:LoginPageComponent,title:'login'},
  {path:'regester',component:RegesterPageComponent,title:'regester-page'},
  {path:'Homepage',component:HomepageComponent,title:'login-page'},
  {path:'showadmins',component:ShowalladminsComponent,title:'showadmins-page'},
  {path:'alladminsget',component:AlladminsgetComponent,title:'alladminsget-page'},
  {path:'GetAdmine',component:BlockedClintComponent,title:'AllAdmine-page'},
  {path:'user/:id/details',component:UsersdetailComponent,title:'usersdetails-page'},
  {path:'registerAdmin',component:RehisterAdminComponent,title:'RegisterAdmin-page'},
  {path:'showowner',component:ShowAllOwnersComponent,title:'showowners-page'},
  {path:'showclintActive',component:ClintActiveComponent,title:'clintActive-page'},
  {path:'showallcompany',component:GetAllCompanyComponent,title:'Company-page'},
  {path:'companyisdeleted',component:GetcompanyisdeletedComponent,title:'Company-page'},
  {path:'CreateCompany',component:CreateCompanyComponent,title:'CreateCompany-page'},
  {path:'update/:id/company',component:UpdatecompanyComponent,title:'updateCompany-page'},
  {path:'Testimage',component:TestimagesComponent,title:'Testimage-page'},
   {path:'createe',component:CreateServiceComponent,title:'createService-page'},
   {path:'comment/:id/company',component:GetallcommentComponent,title:'CompanyComment-page'},
   {path:'company/:id/detail',component:CompanydetailsComponent,title:'CompanyDetails-page'},
   {path:'company/:id/service',component:ServicescompanydeleteComponent,title:'Companyservice-page'},
  



   
  {path:'createService',component:CreateServicePageComponent,title:'createService-page'},


  {path:'showService',component:ShowservicesComponent,title:'showService-page'},
  // {path:'show/:id/Service',component:ShowservicesbyIDComponent,title:'showService-page'},

  {path:'show/:id/Service',component:ShowServicesbyIDComponent,title:'showService-page'},
  // {path:'update/:id/Service',component:UpdateservicebyIDComponent,title:'updateService-page'},

  {path:'update/:id/Service',component:UpdateservicewithidComponent,title:'updateService-page'},


  {path:'addimage/:id/company',component:AddimagecompanyComponent,title:'addimagecompany-page'},
  {path:'showimage/:id/company',component:ShowimagecompanyComponent,title:'showimagecompany-page'},
  {path:'showimage/:id/service',component:ShowserviceImageComponent,title:'showimageservice-page'},
  {path:'addimage/:id/service',component:AddserviceImageComponent,title:'addimageservice-page'},
  // {path:'showOrders/:id/service',component:ShoworderbySerIdComponent,title:'showorderservice-page'},
  {path:'showOrders/:id/service',component:GetorderbyidComponent,title:'showorderservice-page'},


  {path:'showOrders/:id/company',component:AllcompanyOrderComponent,title:'showorderscompany-page'},
  {path:'showComment/:id/company',component:GetallcommentComponent,title:'showCommentcompany-page'},
  {path:'createRepot/:id/company',component:CreateReportComponent,title:'createRepot-page'},
  {path:'showallreport',component:ShowReportComponent,title:'reportshowed-page'},
  {path:'reportnotshow',component:ReportsNotshowComponent,title:'reportnotshow-page'},
  {path:'mychart',component:MychartComponent,title:'mychart-page'},
  {path:'mainowner',component:MainOwnerComponent,title:'mainowner-page'},
  {path:'activewallete',component:ActivewalleteComponent,title:'Activewallete'},
  {path:'lookedwallete',component:BlockwalleteComponent,title:'lookedwallete'},
  {path:'Ownerwallete',component:OwnerwalleteComponent,title:'Ownerwallete'},
  {path:'Clintwallet',component:ClintWalletComponent,title:'Clintwallet'},
  {path:'alltransfer',component:AlltranferComponent,title:'alltransfer'},
  {path:'transferMoneyCompany',component:TransferbycompanyComponent,title:'transferMoneyCompany'},
  {path:'blockuser',component:BlockUsersComponent,title:'blockuser'},
  {path:'forgetpass',component:ForgetpasswordComponent,title:'forgetpass'},
  {path:'Offers',component:OfferspageComponent,title:'Offers'},




















];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
