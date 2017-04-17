import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-prod-details',
  templateUrl: 'prod-details.html'
})
export class ProdDetailsPage {

  constructor(private navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdDetailsPage');
  }
  
  myDate="";

}
