import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ProdCreatePage } from '../prod-create/prod-create';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  jobName = '';
  street1 = '';
  street2 = '';
  city = '';
  zip = '';

  constructor(private navCtrl: NavController) {

  }
  
  onCreateProd() {
      this.navCtrl.push(ProdCreatePage);
  }

}
