import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProdDetailsPage } from '../prod-details/prod-details';

@Component({
  selector: 'page-addr-create',
  templateUrl: 'addr-create.html'
})
export class AddrCreatePage {

  constructor(private navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    
  }
  
  onSubmit() {
    this.navCtrl.push( ProdDetailsPage );
  }

}
