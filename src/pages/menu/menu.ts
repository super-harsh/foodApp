import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController, Modal, ModalOptions} from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {PaymentPage} from '../payment/payment';
import {HomePage} from '../home/home';
import { ModalPage} from '../modal/modal';
//Models
import {Categories} from '../../models/menu.model'

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-menu',
    templateUrl: 'menu.html',
})
export class MenuPage {

    menuList$: AngularFireList < Categories > ;
    email: string;
    private menuRef;
    cart: any[] = [];
    totalAmt: number;
    constructor(
        private firedb: AngularFireDatabase,
        private fire: AngularFireAuth,
        public navCtrl: NavController,
        public navParams: NavParams,
        public modal : ModalController) {

        this.email = fire.auth.currentUser.email;
        this.menuRef = this.firedb.list < Categories > ('categories');

        //fetch the data from the Firebase database
        this.menuList$ = this.menuRef.snapshotChanges().map(changes => {
            return changes.map(c => ({
                key: c.payload.key,
                ...c.payload.val()
            }));
        });



        console.log(this.menuList$);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MenuPage');
    }
//Go back
    Back() {
        this.navCtrl.push(HomePage);
    }
//Add a product to cart.
    addToCart(product) {
        if (product.qty >= 0) {
            product.qty = product.qty + 1;
        } else {
            product.qty = 1;
        }

        this.cart.push(product);
        this.total();
    }

//Delete a product frm he cart
    deleteFromCart(product) {

        if (product.qty > 0) {
            product.qty = product.qty - 1;
        } else {
            product.qty = 0;
        }


        var index = this.cart.indexOf(product)
        if (index >= 0) {
            this.cart.splice(index, 1);
        }
        this.total();
    }


//Sum up the Amount
    total() {

        if (this.cart.length > 0) {
            this.totalAmt = this.cart.map(product => product.price).
            reduce((a, b) => {
                return a + b;
            });
        } else {
            this.totalAmt = 0;
        }

    }
//Go to the payment page
    payment() {
        //pushing data to the payment page.
        this.navCtrl.push(PaymentPage, {
            t: this.totalAmt,
            c: this.cart,
        });

    }
//creating a product modal
    productDetails(product){

      const myModalOptions: ModalOptions = {
        enableBackdropDismiss: true,
        showBackdrop: true
      };
      const modal: Modal = this.modal.create('ModalPage', {p : product}, myModalOptions);
      modal.present();
      modal.onDidDismiss((data)=>{
        if(data){
          this.addToCart(product);
        }
        })
      
    }

    Toggle(data) {
        data.products[0].qty = "0";
        console.log(data.products[0].quantity);
    }

}