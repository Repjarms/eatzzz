import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Dish } from '../../models/dish';

import { GetEatsites } from '../../providers/get-eatsites';
import { CartService } from '../../providers/cart-service';

import { CartPage } from '../cart/cart';

@Component({
  selector: 'page-eatsite-details',
  templateUrl: 'eatsite-details.html'
})
export class EatsiteDetailsPage {
  name: string;
  id: number;
  menu: Dish[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private getEatsites: GetEatsites, private cartService: CartService) {
    this.name = navParams.get('name'); // Get name property from navParams
    this.id = navParams.get('id'); // Get id from navParams

    getEatsites.loadMenu().subscribe(menu => {
      this.menu = menu; // Load array of observables of type Dish[]
    });
  }

  ionViewDidLoad() { }

  // Navigate to checkout cart
  goToCart() {
    this.navCtrl.push(CartPage);
  }

  // Add selected Dish to cart
  addToCart(item) {
    this.cartService.addToCart(item);
  }

}
