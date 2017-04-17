import { Production } from '../../app/project.model';
import { NavController, NavParams } from 'ionic-angular';
import { AddrCreatePage } from '../addr-create/addr-create';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'page-prod-create',
  templateUrl: 'prod-create.html'
})
export class ProdCreatePage {
  production: Production;

  constructor(private navCtrl: NavController, 
              private navParams: NavParams) {
  }

  
  zipValidator(form: NgForm) {
    console.log("HERE!");
    let valid = /^\d{5}$/.test(form.value.zipcode);
    if (!valid) {
      alert("Please enter valid zip!")
    }
  }

  
  onSubmit(form: NgForm) {
    console.log(form)
  //  this.navCtrl.push( AddrCreatePage );
  }

}
