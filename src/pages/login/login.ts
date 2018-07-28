import { Proxy } from './../../helpers/proxy/proxy';
import { Component, Injectable, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { SignInPage } from '../sign-in/sign-in';
//import {HomePage} from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

@Injectable()
export class LoginPage implements OnInit {
  private isLogged: boolean;
  private User: any;

  constructor(
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private proxy: Proxy
  ) {
  }

  ngOnInit(): void {
  }

  loginAction(event) {
    const loader = this.loadingCtrl.create({
      content: "Entrando",
      duration: 3000
    });

    loader.present();

    var params = {
      email: event.target[0].value,
      password: event.target[1].value
    };

    this.proxy.user.login(params)
      .then((result: { status: boolean, content: any }) => {
        loader.dismiss();

        if (result.status) {
          localStorage.setItem('user', JSON.stringify(result.content));
          localStorage.setItem('token', result.content.token);

          this.isLogged = true;
        } else {
          loader.dismiss();

          this.toastCtrl.create({
            message: result.content,
            duration: 30000,
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: "Cerrar",
            cssClass: 'message error-message'
          }).present();
        }
      })
      .catch(console.log);
  }

  goToSignIn() {
    this.navCtrl.push(SignInPage)
    console.log("hey")
  }
}