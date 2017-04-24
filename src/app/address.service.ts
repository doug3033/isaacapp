import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core'
import  { Http } from '@angular/http'; 

@Injectable()
export class AddressService {
  
  constructor(private http: Http) {}

  
  getAddress(zipcode: string) {
    console.log("About to call service");
    let addrUrl = 'http://maps.googleapis.com/maps/api/geocode/json?address=63376&sensor=true'.replace('63376', zipcode);
    return this.http.get(addrUrl);
  }
}