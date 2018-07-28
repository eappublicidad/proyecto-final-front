import { Component, Injectable } from '@angular/core';
import { Proxy } from '../../helpers/proxy/proxy';
import {
  IonicPage,
  NavController,
  LoadingController,
  ToastController
} from 'ionic-angular';

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
@Injectable()
@IonicPage()
export class SignInPage {
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
    var a = localStorage.getItem('user');
    if (a) {
    }
    else {
    }
  }

  registerAction(event) {
    if (event.target[3].value !== event.target[4].value) {
      this.toastCtrl.create({
        message: 'Las contraseñas no coinciden',
        duration: 30000,
        position: 'bottom',
        showCloseButton: true,
        closeButtonText: "Cerrar",
        cssClass: 'message error-message'
      }).present();

      return 0;
    };

    var fields = ['firstName', 'lastName', 'email', 'password'];
    var params = {};

    for (const i in fields)
      if (fields[i] && event.target[i])
        params[i] = event.target[i].value;

    console.log(params);

    const loader = this.loadingCtrl.create({
      content: "Registrando",
      duration: 3000
    });

    loader.present();

    this.proxy.user.save(1, params)
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

  goToSignUp() {
    this.navCtrl.push(SignInPage)
    console.log("hey")
  }
}