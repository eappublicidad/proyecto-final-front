import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignInPage } from '../sign-in/sign-in';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }

  goToSignUp(){
    this.navCtrl.push(SignInPage)
    console.log("hey")
  }

  goToHome(){
    this.navCtrl.push(HomePage)
    console.log("hey")
  }
}