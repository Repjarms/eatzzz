import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EatsiteDetailsPage } from '../eatsite-details/eatsite-details';

import { Eatsite } from '../../models/eatsite';

import { GetEatsites } from '../../providers/get-eatsites';

@Component({
  selector: 'page-eatsites',
  templateUrl: 'eatsites.html'
})
export class EatsitesPage {

  eatsites: Eatsite[]; // Set eatsites property to array of Eatsite

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private getEatsites: GetEatsites) {

      // Load all eatsites when page is loaded
      getEatsites.loadSites().subscribe(sites => {
        this.eatsites = sites;
      });
    }

  ionViewDidLoad() { }

  // Go to specific page for an eatsite
  goToDetails(name: string, id: number) {
    this.navCtrl.push(EatsiteDetailsPage, {name, id});
  }

}
