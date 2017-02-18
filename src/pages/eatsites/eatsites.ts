import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EatsiteDetailsPage } from '../eatsite-details/eatsite-details';
import { CartPage } from '../cart/cart';

import { Eatsite } from '../../models/eatsite';

import { GetEatsites } from '../../providers/get-eatsites';
import { FilterProvider } from '../../providers/filter-provider';

@Component({
  selector: 'page-eatsites',
  templateUrl: 'eatsites.html'
})
export class EatsitesPage {

  eatsites: Eatsite[]; // Set eatsites property to array of Eatsite
  cuisines = [];
  price = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private getEatsites: GetEatsites) {

      // Load all eatsites when page is loaded
      getEatsites.loadSites().subscribe(sites => {
        this.eatsites = sites;
      });

      this.cuisines = ['Indian', 'American', 'Chinese', 'French'];
      this.price = [1,2,3,4];

    }

  ionViewDidLoad() { }

  // Go to specific page for an eatsite
  goToDetails(name: string, id: number) {
    this.navCtrl.push(EatsiteDetailsPage, {name, id});
  }

  goToCart() {
    this.navCtrl.push(CartPage);
  }

  onCancel() {
    console.log('Cancelled');
  }

  inFilter(siteType, siteCost) {
    for (let item in this.cuisines) {
      if (this.cuisines[item] == siteType) {
        for(let cost in this.price) {
          if (this.price[cost] == siteCost) {
            return true;
          }
        }
      }
    }
  }

  cuisineFilterUpdate(e) {
    this.cuisines = e;
    console.log(this.cuisines);
  }

  priceFilterUpdate(e) {
    this.price = e;
    console.log(this.price);
  }

}
