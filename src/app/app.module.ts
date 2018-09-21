import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {GooglemapComponent} from '../components/googlemap/googlemap'
//Pages
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { TabsPage } from '../pages/tabs/tabs';
import { RegisterPage } from '../pages/register/register';
import { SignInPage } from '../pages/sign-in/sign-in';
import { PaymentPage } from '../pages/payment/payment';
import { OrdersPage } from '../pages/orders/orders';
import {ConfirmPage} from '../pages/confirm/confirm'
//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { OrdersService } from '../services/orders.service';


const firebase = {
    apiKey: "AIzaSyA06bt6LGa9IWBSZSlZ8G5HLDevux-_7Iw",
    authDomain: "foodapp-95693.firebaseapp.com",
    databaseURL: "https://foodapp-95693.firebaseio.com",
    projectId: "foodapp-95693",
    storageBucket: "foodapp-95693.appspot.com",
    messagingSenderId: "783393482303"
  };

@NgModule({
  declarations: [
    MyApp,
    GooglemapComponent,
    ContactPage,
    HomePage,
    MenuPage,
    RegisterPage,
    SignInPage,
    TabsPage,
    PaymentPage,
    OrdersPage,
    ConfirmPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    MenuPage,
    RegisterPage,
    SignInPage,
    TabsPage,
    PaymentPage,
    OrdersPage,
    ConfirmPage
  ],
  providers: [
    OrdersService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
