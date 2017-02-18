import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Dish } from '../../models/dish';

@Component({
  selector: 'page-checkout-success',
  templateUrl: 'checkout-success.html'
})
export class CheckoutSuccessPage {

  total: number;
  contents: Dish[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.total = navParams.get('total');
    this.contents = navParams.get('contents');

    console.log(`checkout success has ${this.contents}`)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutSuccessPage');
  }

}
