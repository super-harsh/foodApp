import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-sign-in',
    templateUrl: 'sign-in.html',
})
export class SignInPage {

    @ViewChild('Username') userName;
    @ViewChild('Password') password;


    constructor(private fire: AngularFireAuth, public navCtrl: NavController, public alertCtrl: AlertController) {

    }

//Show alert
    showAlert(msg) {
        const alert = this.alertCtrl.create({
            title: 'Login',
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    }
    //Sign in method
    signIn() {
        //check if the values match
        if (this.userName.value === "" || this.password.value == "") {
            this.showAlert('Username and Password feilds cannot be empty!');

        }//else send the data to firebase and check the responses 
        else {
            this.fire.auth.signInWithEmailAndPassword(this.userName.value, this.password.value)
                .then(data => {
                    this.showAlert('Welcome ' + this.userName.value);
                    this.navCtrl.push(MenuPage);

                })
                .catch(error => {
                    console.log('error', error);
                    this.showAlert(error.message);

                })

        }
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SignInPage');
    }

}