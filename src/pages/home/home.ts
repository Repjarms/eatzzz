import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EatsitesPage } from '../eatsites/eatsites';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  // Called on 'Find Food' button on homepage
  goToSites() {
    this.navCtrl.push(EatsitesPage);
  }

  // Called on 'Signup' button on homepage
  goToRegister() {
    this.navCtrl.push(RegisterPage);
  }



}
