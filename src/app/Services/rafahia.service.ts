import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { baseUrlservice } from './baseUrl.service';

//Admin response get
export class adminResponse{
  firstName!: string
  lastName!: string
  username!: string
  email!: string
}
//Admin response get
export interface adminResponsetype{
  status:number,
  admin:adminResponse[]
}
export class fordel{
  Email:string
}
 export interface deldel{
  status:number,
  delete:fordel[]
}
//Login response method
interface LoginResponse {
  token: string;
  roles: string[];}
  //Owner response get
export class ownerResponse{
     userName!: string
     userEmail!: string
     companyName!: number
}
//Owner response get
export interface ownerResponsetype{
  status:number,
  owners:ownerResponse[]
}
export class companyss{
  id!: number
  name!: string
  typeCompanyId!: number
  typeCompanyName!:string 
  longtude!: string
  latetud!: string
  addressId!:number
  addressName!: string
  cityName!: string
  note!: string
  rustorant!: boolean
  swimmingbool!: boolean
  cooffee!:boolean
  imageCompany!:string
}
export interface comptype{
  status:number,
  compty:companyss,
}

// export interface clintactiveresponsetype{
//   status:number,
//   admin:clintactiveresponse[]
// }
// export class clintblockresponse{
//   id!: number
//   firstName!: string
//   laststName!: string
//   userName!: string
//   userEmail!: string
//   phoneNumbar!: string
//   age!:number
// }
export class allcompanyresponse{
  id!: number
  name!: string
  typeCompanyId!: number
  typeCompanyName!: string
  longtude!: string
  latetud!: string
  addressId!:number
  addressName!: string
  cityName!: string
  note!: string
  rustorant!: boolean
  swimmingbool!:boolean 
  cooffee!:boolean 
  imageCompany!: string
}
export interface allcompanyresponsetype{
  status:number,
  admin:allcompanyresponse[]
}
export class allservicesresponse{
  id!: number
  name!: string
  number!: number
  price!: number
  description!: string
  companyId!: number
  company!: string
  ImageService!:string
}
export interface allservicesresponsetype{
  status:number,
  admin:allservicesresponse[]
}
export class usersdetail{
  Id!: Number
  FirstName !: string
  LaststName !: string
  UserName !: string
   UserEmail !: string
   PhoneNumbar! : string
   age !: Number
   sexuallyId !: Number
   sexually !: string
   countryId !: Number
   country !: string
   marital_StateId! :Number
   marital_State !: string
}
export interface usersdetailtype{
  status:number,
  admin:usersdetail[]
}

@Injectable({
  providedIn: 'root'
})
export class RafahiaService {
  mydtaa = new EventEmitter<string>();

  constructor( private httpClint:HttpClient,private BaseUrlservice:baseUrlservice) { }
  dataemail(emails:string){
      this.mydtaa.emit(emails);

    }
  getCompanyEmail(companyEmail: string): Observable<any> {
      const url = this.BaseUrlservice.getBaseUrl() + `Company/Company/${companyEmail}`;
      return this.httpClint.get<any>(url);}
  getCompanyId(companyid: string): Observable<any> {
        const url = this.BaseUrlservice.getBaseUrl() + `Company/${companyid}`;
        return this.httpClint.get<any>(url);}
  replayemailconfirmation(email: string): Observable<any> {
    const url = this.BaseUrlservice.getBaseUrl() + `Auth/ReblayEmailConfirmationAsync${email}`;
          return this.httpClint.get<any>(url);}
    
  saveOwner(inputData:object){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClint.post(this.BaseUrlservice.getBaseUrl()+'Auth/register',inputData, {headers });
  }
  passwordforget(inputData:object){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClint.post(this.BaseUrlservice.getBaseUrl()+'Auth/ForgotPasswordByEmail',inputData, {headers });
  }
  Offers(inputData:object){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClint.post(this.BaseUrlservice.getBaseUrl()+'Mailing/sendTBMessagTopic',inputData, {headers });
  }
  getalladmin(){
    return this.httpClint.get<adminResponsetype>(this.BaseUrlservice.getBaseUrl()+'Auth');
    
  }
  alladmingets(){
    return this.httpClint.get<adminResponsetype>(this.BaseUrlservice.getBaseUrl()+'Auth/AdmineAll');
    
  }
  getuserdetails(userid: Number) {
    return this.httpClint.get<any>(this.BaseUrlservice.getBaseUrl()+`Auth/ClientGet/${userid}`);
  }
  acceptuser(cid:Number){
    return this.httpClint.delete(this.BaseUrlservice.getBaseUrl()+`Auth/ClientActive/` + cid )
  
  }
  canceluser(cid:Number){
    return this.httpClint.delete(this.BaseUrlservice.getBaseUrl()+`Auth/ClientDelete/` + cid )
  }
  acceptwallete(cid:Number){
    return this.httpClint.delete(this.BaseUrlservice.getBaseUrl()+`Wallet/UpdateStateWalletUserToActive/` + cid )
  }
  cancelwallete(cid:Number){
    return this.httpClint.delete(this.BaseUrlservice.getBaseUrl()+`Wallet/UpdateStateWalletUserToLokeed/` + cid )
  }

  
  saveAdmin(inputData:object){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClint.post(this.BaseUrlservice.getBaseUrl()+'Auth/CreateAdmin',inputData, {headers });
  }
  getallowners(){
    return this.httpClint.get<ownerResponse>(this.BaseUrlservice.getBaseUrl()+'Auth/Owner');
    
  }
  loginadmins(email: string, password: string) {
    const model = { email: email, password: password };
    return this.httpClint.post<LoginResponse>(this.BaseUrlservice.getBaseUrl()+'Auth/token', model);
  }
  getuserActive(){
    return this.httpClint.get(this.BaseUrlservice.getBaseUrl()+'Auth/ClientsActive');
    
  }
  getuserblock(){
    return this.httpClint.get(this.BaseUrlservice.getBaseUrl()+'Auth/ClientsLoked');
    
  }
  getallcompany(){
    return this.httpClint.get<allcompanyresponsetype>(this.BaseUrlservice.getBaseUrl()+'Company');
  }
  getallcompanyisdelete(){
    return this.httpClint.get<allcompanyresponsetype>(this.BaseUrlservice.getBaseUrl()+'Company/IsDeleted');
  }
  getcompanyid(companyid: Number) {
    return this.httpClint.get<companyss>(this.BaseUrlservice.getBaseUrl()+`Company/${companyid}`);
  }
 
  savecompany(inputData: object, imgfile: File) {
    const formData = new FormData();
    formData.append('file', imgfile);
    formData.append('inputData', JSON.stringify(inputData));
  
    const headers = new HttpHeaders();
    // Remove the Content-Type header since we are using FormData
    // The correct Content-Type will be automatically set by the browser
  
    return this.httpClint.post(this.BaseUrlservice.getBaseUrl()+'Company/CreateCompany', formData, { headers });
  }

  deletecompany(compid:Number,compEmail:string){
    return this.httpClint.delete<deldel>(this.BaseUrlservice.getBaseUrl()+`Company/DeleteCompanyWith/${compid}/${compEmail}`);
  }
  async updatecompanybyid(inputData:object,companyid:number){
    
    const headers = new HttpHeaders();
  headers.append('Content-Type', 'multipart/form-data');
    return await lastValueFrom( this.httpClint.post(this.BaseUrlservice.getBaseUrl()+`Company/UpdateCompany/${companyid}`,inputData,{headers}));
    
  }


  async create(formData:FormData){
    return await lastValueFrom(this.httpClint.post(this.BaseUrlservice.getBaseUrl()+'Company/CreateCompany',formData));

} 
async createservice(formData:FormData){
  return await lastValueFrom(this.httpClint.post(this.BaseUrlservice.getBaseUrl()+'Service/CreateServiceCompany',formData))
}
getallservices(){
  return this.httpClint.get<allservicesresponsetype>(this.BaseUrlservice.getBaseUrl()+'Service');
}
getservicescompanyid(serviceid: Number) {
  return this.httpClint.get<allservicesresponsetype>(this.BaseUrlservice.getBaseUrl()+`Service/ServiceCompany/${serviceid}`);
}
getservicesdeletecompanyid(serviceid: Number) {
  return this.httpClint.get<allservicesresponsetype>(this.BaseUrlservice.getBaseUrl()+`Service/ServiceIsdeletedCompany/${serviceid}`);
}
getservicebyid(serviceid:number){
return this.httpClint.get<allservicesresponsetype>(this.BaseUrlservice.getBaseUrl()+`Service/${serviceid}`);
}
async updateservidebyid(inputData:object,serviceid:number){
    
  const headers = new HttpHeaders();
headers.append('Content-Type', 'multipart/form-data');
  return await lastValueFrom( this.httpClint.post(this.BaseUrlservice.getBaseUrl()+`Service/UpdateServiceCompany/${serviceid}`,inputData,{headers}));
  
}
deleteservice(serviceid:Number,compEmail:string){
  return this.httpClint.delete(this.BaseUrlservice.getBaseUrl()+`Service/DeleteServiceCompanyWith/${serviceid}/${compEmail}`);
}
  addcompanyimage(companyId:Number,email:string,formData:FormData){
   return this.httpClint.post(this.BaseUrlservice.getBaseUrl()+`Image/CompanyImage/${{companyId}}/${{email}}` , formData)
}
getAllCompanyImages(companyId:Number){
  return this.httpClint.get<any[]>(this.BaseUrlservice.getBaseUrl()+'Image/AllCompanyImage/' + companyId);
}
deletecompanyImage(cid:Number,Email:string){
  return this.httpClint.delete(this.BaseUrlservice.getBaseUrl()+'Image/CompanyImage/' + cid +'/'+ Email)
}
createcompanyImage(companyId:Number,email:string,formData:FormData){
  return this.httpClint.post(this.BaseUrlservice.getBaseUrl()+'Image/CompanyImage/' + companyId + '/' + email, formData)
}
getAllSeviceImages(serviceId:Number) {
  return this.httpClint.get<any[]>(this.BaseUrlservice.getBaseUrl()+'Image/AllserviceImage/' + serviceId);
}
deleteserviceImage(cid:Number,Email:string){
  return this.httpClint.delete(this.BaseUrlservice.getBaseUrl()+'Image/ServiceImage/' + cid +'/'+ Email)

}
createserviceImage(serviceId:Number,email:string,formData:FormData){
  return this.httpClint.post(this.BaseUrlservice.getBaseUrl()+'Image/ServiceImage/' + serviceId + '/' + email, formData)
}
getAllSeviceOrders(serviceId:Number) {
  return this.httpClint.get<any[]>(this.BaseUrlservice.getBaseUrl()+'Order/Service/' + serviceId);
}
getAllcompanyOrders(compid:number) {
  return this.httpClint.get<any[]>(this.BaseUrlservice.getBaseUrl()+'Order/CompanyOrderAll/' + compid);
}
acceptorder(cid:Number){
  return this.httpClint.delete(this.BaseUrlservice.getBaseUrl()+'Order/UpdateOrderByCompanyBooked/' + cid )

}
cancelorder(cid:Number){
  return this.httpClint.delete(this.BaseUrlservice.getBaseUrl()+'Order/UpdateOrderByCompanyCancel/' + cid )
}
getAllOrdersnotbookked(compid:number) {
  return this.httpClint.get<any[]>(this.BaseUrlservice.getBaseUrl()+'Order/CompanyServiceIsNotBooked/' + compid);
}
getAllOrdersbooked(compid:number) {
  return this.httpClint.get<any[]>(this.BaseUrlservice.getBaseUrl()+'Order/CompanyServiceIsBooked/' + compid);
}
getAllOrderspdf(compid:number) {
  return this.httpClint.get<any[]>(this.BaseUrlservice.getBaseUrl()+'Order/generatepdf/' + compid);
}
generateOrderPDF(orderId: number): void {
  const url = this.BaseUrlservice.getBaseUrl()+`Order/generatepdf/${orderId}`;
  this.httpClint.get(url, { responseType: 'blob' }).subscribe((response: Blob) => {
    const file = new Blob([response], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL); // Open the PDF in a new tab
  });
}
getCommentcompany(compid:number) {
  return this.httpClint.get<any[]>(this.BaseUrlservice.getBaseUrl()+'Comment/CommentCompany/' + compid);
}
async createReportid(inputData:object,reportid:number){
    
  const headers = new HttpHeaders();
headers.append('Content-Type', 'multipart/form-data');
  return await lastValueFrom( this.httpClint.post(this.BaseUrlservice.getBaseUrl()+`Report/CreateReportt/${reportid}`,inputData,{headers}));
  
}
savereport(reportid:number,inputData:object){
  const headers = new HttpHeaders().set('Content-Type', 'application/json');
  return this.httpClint.post(this.BaseUrlservice.getBaseUrl()+`Report/CreateReportt/${reportid}`,inputData, {headers });
}


createReport(commentId: number, Reporttext: string): Observable<any> {
  const headers = new HttpHeaders().set('Content-Type', 'application/json');
  const url = this.BaseUrlservice.getBaseUrl()+`Report/CreateReportt/${commentId}/${Reporttext}`;
  return this.httpClint.get(url);
}
getreportwachted(){
  return this.httpClint.get(this.BaseUrlservice.getBaseUrl()+'Report/GetReportIsWatched');
  
}
getreportNotwachted(){
  return this.httpClint.get(this.BaseUrlservice.getBaseUrl()+'Report/GetReportIsNotWatched');
  
}
reportshowed(cid:Number){
  return this.httpClint.delete(this.BaseUrlservice.getBaseUrl()+'Report/UpdateReportt/' + cid )

}
deleteComment(cid:Number){
  return this.httpClint.delete(this.BaseUrlservice.getBaseUrl()+'Report/DeleteCommentByAdmin/' + cid )

}
getdatastatic(){
  return this.httpClint.get(this.BaseUrlservice.getBaseUrl()+'DataStatistic/GetDataStatistic');
  
}
getdatastaticcompany(id:Number){
  return this.httpClint.get(this.BaseUrlservice.getBaseUrl()+'DataStatistic/GetDataStatisticByCompany/'+id);
  
}

getallwallete(){
  return this.httpClint.get(this.BaseUrlservice.getBaseUrl()+'Wallet/GetWalletActive');
}
getallwalletelooked(){
  return this.httpClint.get(this.BaseUrlservice.getBaseUrl()+'Wallet/GetWalletLooked');
}
getallwalleteOwner(){
  return this.httpClint.get(this.BaseUrlservice.getBaseUrl()+'Wallet/GetAllOwnerWallet');
}
getallwalleteClint(){
  return this.httpClint.get(this.BaseUrlservice.getBaseUrl()+'Wallet/GetAllClientWallet');
}
getallTranfer(){
  return this.httpClint.get(this.BaseUrlservice.getBaseUrl()+'Wallet/GettransfersWallet');
}
gettransferompany(id:Number){
  return this.httpClint.get(this.BaseUrlservice.getBaseUrl()+'Wallet/GettransfersWalletByCompanyId/'+id);
  
}
}

function dataemail(email: any, String: StringConstructor) {
  throw new Error('Function not implemented.');
}

