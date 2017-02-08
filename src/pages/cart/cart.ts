import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Dish } from '../../models/dish';

import { CartService } from '../../providers/cart-service';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {

  contents: Dish[];
  totalCost: number;
  isListHidden: boolean; // Determines whether to show the ion-list of cart items

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private cartService: CartService) { }

  ionViewDidLoad() {
    this.contents = this.cartService.getCartContents();
    this.totalCost = this.cartService.getCartTotalCost();
    this.isListHidden = false;
  }

  emptyCartContents() {
    this.cartService.emptyCartContents();
    this.isListHidden = true;
    this.totalCost = this.cartService.getCartTotalCost();
  }

  checkOutCart(total) {
    // TODO: call out to stripe provider and send total
    console.log(`checkOutCart has total of ${total}`);
  }

}
