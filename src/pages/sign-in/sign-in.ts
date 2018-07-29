import { Component, Injectable } from '@angular/core';
import { Proxy } from '../../helpers/proxy/proxy';
import {
  IonicPage,
  NavController,
  LoadingController,
  ToastController
} from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
@Injectable()
@IonicPage()
export class SignInPage {
  private isLogged: boolean;
  private User: any;
  token: string;

  constructor(
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private proxy: Proxy
  ) {
  }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    if (this.token) {
      this.isLogged = true;
      this.navCtrl.push(HomePage);
    } else
      this.isLogged = false;
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

      return;
    };

    var fields = ['firstName', 'lastName', 'email', 'password'];
    var params = {};

    for (const i in fields)
      if (fields[i] && event.target[i])
        params[fields[i]] = event.target[i].value;

    const loader = this.loadingCtrl.create({
      content: "Registrando",
      duration: 3000
    });

    loader.present();

    this.proxy.user.save(null, params)
      .then((result: { status: boolean, content: any }) => {
        console.log(result);
        loader.dismiss();

        if (result.status) {
          const message = result.content[0];
          const model = result.content[1];

          localStorage.setItem('user', JSON.stringify(model.content));
          localStorage.setItem('token', model.content.token);

          this.isLogged = true;

          this.toastCtrl.create({
            message: message.content,
            duration: 3000,
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: "Cerrar",
            cssClass: 'message info-message'
          }).present();

          this.navCtrl.push(HomePage);
        } else {
          const message = result.content[0];
          this.toastCtrl.create({
            message: message.content,
            duration: 3000,
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: "Cerrar",
            cssClass: 'message error-message'
          }).present();
        }
      }).catch(console.log);
  }

  goToSignIn() {
    this.navCtrl.push(LoginPage);
  }
}