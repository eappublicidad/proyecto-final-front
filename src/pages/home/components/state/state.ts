import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { FormPostComponent } from '../form-post/form-post';

/**
 * Generated class for the PostComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-state',
  templateUrl: 'State.html'
})
export class StateComponent {
  
  constructor(private modalCtrl: ModalController) {
  }
  
  openPostForm() {
    this.modalCtrl
      .create(FormPostComponent, {}, { cssClass: 'form-modal', showBackdrop: false })
      .present();
  }
}
