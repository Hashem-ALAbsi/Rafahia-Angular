import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class baseUrlservice{
    private BaseUrl:string='https://rafahiatest.runasp.net/api/v1.0/';

   getBaseUrl():string{
    return this.BaseUrl;
   } 
}