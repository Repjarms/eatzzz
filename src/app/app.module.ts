import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { EatsitesPage } from '../pages/eatsites/eatsites';
import { EatsiteDetailsPage } from '../pages/eatsite-details/eatsite-details';
import { RegisterPage } from '../pages/register/register';
import { CartPage } from '../pages/cart/cart';
import { CheckoutSuccessPage } from '../pages/checkout-success/checkout-success';

import { FilterComponent } from '../components/filter/filter';

import { GetEatsites } from '../providers/get-eatsites';
import { CartService } from '../providers/cart-service';
import { StripeProvider } from '../providers/stripe-provider';
import { FilterProvider } from '../providers/filter-provider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EatsitesPage,
    EatsiteDetailsPage,
    RegisterPage,
    CartPage,
    FilterComponent,
    CheckoutSuccessPage
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
    CartPage,
    CheckoutSuccessPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
    GetEatsites, CartService, StripeProvider, FilterProvider]
})
export class AppModule {}
