import { Component, Output, EventEmitter } from '@angular/core';
import { ViewController, NavController, LoadingController, ToastController } from 'ionic-angular';
import { Proxy } from '../../../../helpers/proxy/proxy';

@Component({
  selector: 'app-form-post',
  templateUrl: 'form-post.html'
})

export class FormPostComponent {
  constructor(
    public viewCtrl: ViewController,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private proxy: Proxy
  ) {
  }

  submitPost(event) {
    var params = {};
    var fields = ['content'];
    var params = {};

    for (const i in fields)
      if (fields[i] && event.target[i])
        params[fields[i]] = event.target[i].value;

    const loader = this.loadingCtrl.create({
      content: "publicando",
      duration: 3000
    });

    loader.present();

    this.proxy.post.save(null, params)
      .then((result: { status: boolean, content: any }) => {
        loader.dismiss();
        let model = false
        if (result.status) {
          const message = result.content[0];
          model = result.content[1];

          this.toastCtrl.create({
            message: message.content,
            duration: 3000,
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: "Cerrar",
            cssClass: 'message info-message'
          }).present();
        }
        this.viewCtrl.dismiss(model);
      }).catch(console.log);
  }
  cancel() {
    this.viewCtrl.dismiss();
  }
}