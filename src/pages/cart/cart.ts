import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Dish } from '../../models/dish';

import { CartService } from '../../providers/cart-service';
import { StripeProvider } from '../../providers/stripe-provider';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {

  contents: Dish[];
  totalCost: number;
  isListHidden: boolean; // Determines whether to show the ion-list of cart items

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private cartService: CartService, private stripeProvider: StripeProvider) { }

  ionViewDidLoad() {
    this.contents = this.cartService.getCartContents();
    this.totalCost = this.cartService.getCartTotalCost();
    this.isListHidden = false;
  }

  // Called by selecting the 'Empty cart' button
  emptyCartContents() {
    this.cartService.emptyCartContents();
    this.isListHidden = true;
    this.totalCost = this.cartService.getCartTotalCost();
  }

  // Called by selecting the checkout button
  checkOutCart(total) {
    console.log(`checkOutCart has total of ${total}`);
    console.log(this.stripeProvider.checkout(total));

    // Empty cart

    this.isListHidden = true;
    this.totalCost = this.cartService.getCartTotalCost();
  }

  // Called by long press on cart item
  removeItem(item) {
    this.cartService.removeFromCart(item); // Remove item from cart and card from DOM
    this.totalCost = this.cartService.getCartTotalCost(); // Recalculate total cart value
  }
}
