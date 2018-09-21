import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

	product: any;

  constructor( public navParams: NavParams, private view: ViewController) {
  
  	this.product = this.navParams.get('p');
  }

  closeModal(){
   this.view.dismiss(false);
  }

	addToCart(){
		this.view.dismiss(true);

	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

}
