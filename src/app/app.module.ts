import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { EatsitesPage } from '../pages/eatsites/eatsites';
import { EatsiteDetailsPage } from '../pages/eatsite-details/eatsite-details';
import { RegisterPage } from '../pages/register/register';

import { GetEatsites } from '../providers/get-eatsites';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EatsitesPage,
    EatsiteDetailsPage,
    RegisterPage
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
    RegisterPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, GetEatsites]
})
export class AppModule {}
