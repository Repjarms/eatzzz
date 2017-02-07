import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { EatsitesPage } from '../pages/eatsites/eatsites';
import { EatsiteDetailsPage } from '../pages/eatsite-details/eatsite-details';
import { RegisterPage } from '../pages/register/register';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage = HomePage;

  constructor(platform: Platform, public menu: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
