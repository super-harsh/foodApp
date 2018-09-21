import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {OrdersService} from '../../services/orders.service';

import { Order } from '../../models/menu.model' 
/**
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {

	allOrders: Order[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: OrdersService) {
  	//retreive all the orders from the service
  	this.allOrders = this.service.getOrders();
  //	console.log(this.allOrders[0].products[0].name);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdersPage');
  }

}
