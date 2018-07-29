import { Component } from '@angular/core';
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
    console.log('postform');
  }

  submitPost(event) {
    console.log('submit');
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

    this.viewCtrl.dismiss();
    this.proxy.post.save(null, params)
      .then((result: { status: boolean, content: any }) => {
        console.log(result);
        loader.dismiss();
        if (result.status) {
          const message = result.content[0];
          const model = result.content[1];

          this.toastCtrl.create({
            message: message.content,
            duration: 3000,
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: "Cerrar",
            cssClass: 'message info-message'
          }).present();
        }
      }).catch(console.log);
  }
  cancel() {
    this.viewCtrl.dismiss();
  }
}