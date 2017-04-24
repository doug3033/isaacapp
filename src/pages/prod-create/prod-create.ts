import { Address } from '../../app/address.class';
import { Production } from '../../app/project.model';
import { NavController, NavParams } from 'ionic-angular';
import { AddrCreatePage } from '../addr-create/addr-create';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddressService } from '../../app/address.service';
import { Response } from '@angular/http';


@Component({
  selector: 'page-prod-create',
  templateUrl: 'prod-create.html'
})
export class ProdCreatePage {
  production: Production;
  response: Response;


  constructor(private navCtrl: NavController, 
              private navParams: NavParams, 
              private addressService: AddressService,
              private address: Address) {
    this.addressService = addressService; 
    this.address = address;
  } 

  
  zipValidator(form: NgForm) {
    let valid = /^\d{5}$/.test(form.value.zipcode);
    if (!valid) {
      alert("Please enter valid zip!")
    }
  }

  
  onSubmit(form: NgForm) {
      this.addressService.getAddress(form.value.zipcode).subscribe(
     (response: Response) => {
       const data = response.json();
       this.address.setZipcode(data.results[0].address_components[0].long_name);
       this.address.setCity(data.results[0].address_components[1].long_name);
       this.address.setState(data.results[0].address_components[3].short_name);
       this.navCtrl.push( AddrCreatePage, { address: this.address.getAddress() } );    
     },
    (error) => console.log('the error is: ' + error))
  }

}
