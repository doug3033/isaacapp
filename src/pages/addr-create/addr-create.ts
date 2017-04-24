import { Address } from '../../app/address.class';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProdDetailsPage } from '../prod-details/prod-details';

@Component({
  selector: 'page-addr-create',
  templateUrl: 'addr-create.html'
})
export class AddrCreatePage {
  address: Address;

  constructor(private navCtrl: NavController, public navParams: NavParams) {
    this.address = navParams.get('address');
    console.log("The received address is: " + JSON.stringify(this.address));
  }

  ionViewDidLoad() {
    
  }
  
  onSubmit() {
    this.navCtrl.push( ProdDetailsPage );
  }

}
