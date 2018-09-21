import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {OrdersPage} from '../orders/orders'; 
import {ConfirmPage} from '../confirm/confirm'

import { OrdersService } from '../../services/orders.service';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-payment',
    templateUrl: 'payment.html',
})
export class PaymentPage {

    cart: any[] = [];
    totalAmt: number;


    constructor(public navCtrl: NavController, public navParams: NavParams , private service: OrdersService, private alertCtrl : AlertController) {
        //fetch the data from navParams
        this.totalAmt = this.navParams.get('t');
        this.cart = this.navParams.get('c');
        this.reduceCart();

    }

    //Condense the cart and remove the duplications.
    reduceCart() {

        var New: any[] = [];
        this.cart.forEach(function(product) {
            if (New.indexOf(product) < 0) {
                New.push(product);
            }
        });
        this.cart = New;
    }

    //Make an order and go to the last page
    order(){
    //If there is something in the cart.
        if(this.cart.length > 0){
       const currentOrder = {
      date: new Date(),
      totalAmt: this.totalAmt,
      products: this.cart,
    }

    this.service.newOrder(currentOrder);
    this.navCtrl.push(ConfirmPage);
        }else{
            this.showAlert("Cart is empty");
        }
      


    }

     showAlert(msg) {
        const alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    }



    ionViewDidLoad() {
        console.log('ionViewDidLoad PaymentPage');
  }
}
