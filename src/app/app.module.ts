import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { EatsitesPage } from '../pages/eatsites/eatsites';
import { EatsiteDetailsPage } from '../pages/eatsite-details/eatsite-details';
import { RegisterPage } from '../pages/register/register';
import { CartPage } from '../pages/cart/cart';

import { GetEatsites } from '../providers/get-eatsites';
import { CartService } from '../providers/cart-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EatsitesPage,
    EatsiteDetailsPage,
    RegisterPage,
    CartPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EatsitesPage,
    EatsiteDetailsPage,
    RegisterPage,
    CartPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
    GetEatsites, CartService]
})
export class AppModule {}
