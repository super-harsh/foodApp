import { Component, ViewChild } from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';

import {SignInPage} from '../sign-in/sign-in';
import {RegisterPage} from '../register/register';



@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    @ViewChild('Username') userName;
    @ViewChild('Password') password;


    constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

    }

    signIn() {
        this.navCtrl.push(SignInPage);
    }

    register() {
        this.navCtrl.push(RegisterPage);
    }


}