import { AddressI } from './address.model';

export class Address {
    private address: AddressI;
  
  
    constructor() {
        this.address = {};
    }
  
    public setStreet1(street1 ) {
          this.address.street1 = street1;
    };
   
    public setStreet2(street2 ) {
          this.address.street2 = street2;
    };
      
    public setCity(city ) {
          this.address.city = city;
    };
  
    public setState(state ) {
          this.address.state = state;
    };
  
    public setZipcode(zipcode ) {
          this.address.zipcode = zipcode;
    };
  
    public getStreet1() {
          return(this.address.street1);
    };
   
    public getStreet2() {
          return(this.address.street2);
    };
   
    public getCity() {
          return(this.address.city);
    };
   
    public getState() {
          return(this.address.state);
    };
   
    public getZipcode() {
          return(this.address.zipcode);
    };
  
    public getAddress() {
      return(this.address);
    }

}