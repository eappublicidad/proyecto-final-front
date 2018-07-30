import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { FormPostComponent } from '../form-post/form-post';

@Component({
  selector: 'app-state',
  templateUrl: 'State.html'
})
export class StateComponent {
  constructor(private modalCtrl: ModalController, private navCtrl: NavController) {
  }

  openPostForm() {
    let modal = this.modalCtrl.create(FormPostComponent, {}, { cssClass: 'form-modal', showBackdrop: false })

    modal.present();

    modal.onDidDismiss(data => {
      console.log('out');
    });
  }
}
