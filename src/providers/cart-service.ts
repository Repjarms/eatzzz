import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Dish } from '../models/dish';

@Injectable()
export class CartService {

  cart = [];

  constructor(public http: Http, private toastCtrl: ToastController) { }

  // TODO: move toast to separate provider
  presentToast(message) { // need to return toast object
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  // Add selected item to cart
  addToCart(item) {
    this.cart.push(item);
    this.presentToast('Nice! Item added to cart.');
  }

  // Remove item from cart
  removeFromCart(item) {
    this.cart.splice(item, 1);
    this.presentToast('Item removed from cart');
  }

  // Return the contents of the cart
  // Called by navigation to the cart page
  getCartContents() {
    return this.cart;
  }

  // Empty the contents of the cart
  // Called by 'Empty Cart' button in cart page
  emptyCartContents() {
    this.cart = [];
    this.presentToast('Cart Emptied :(');
  }

  // Return the total price of the cart
  // Called by navigation to the cart page
  getCartTotalCost() {
    let total = 0;

    for (let item in this.cart) {
      total += this.cart[item].price;
    }
    return total;
  }

}
