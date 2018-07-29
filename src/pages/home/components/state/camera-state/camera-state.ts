import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'app-camera-state',
  templateUrl: 'camera-state.html'
})
export class CameraStateComponent {
    text: string;
    constructor() {
        console.log('Hello CameraStateComponent Component');
        this.text = 'Hello CameraStateComponent';
    }

    openGalery() {
        console.log('Hello estoy en Galeria');
    }

    openCamera() {
        console.log('Hello estoy en Camera');
    }
}