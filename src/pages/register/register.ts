import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { SignInPage } from '../sign-in/sign-in';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

	@ViewChild('Username') userName;
	@ViewChild('Password') password;
	@ViewChild('Confirm') confirm;
	
	
  constructor(private fire: AngularFireAuth,public navCtrl: NavController,public alertCtrl: AlertController) {
  }

//Shows the alert.
   showAlert(msg) {
      const alert = this.alertCtrl.create({
      title: 'Register',
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }
  
  //Registers the user and checks for some cases
  register(){
    //If the feilds are empty
  	if(this.password.value === "" || this.confirm.value === "" || this.userName.value === ""){
		this.showAlert('Username and Password feilds cannot be empty!');
  	}
    //If confirm password and password feilds don't match
  	else if(this.password.value !== this.confirm.value){
  		this.showAlert('Passwords should match')
  	}
    //else send the data to the firebase and check the response
  	else{
  		
  		this.fire.auth.createUserWithEmailAndPassword(this.userName.value, this.password.value)
  		.then(data => {
  			this.showAlert('Registered Successfully');
  			this.navCtrl.push(SignInPage);
  			})
  		.catch(error => {
  			console.log('got an error', error)
  			this.showAlert(error.message)
  			});

  		
 }
}

}
