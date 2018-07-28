import { Component } from '@angular/core';

/**
 * Generated class for the PostComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-footer-home',
  templateUrl: 'footer-home.html'
})
export class FooterHomeComponent {

  text: string;

  constructor() {
    console.log('Hello FooterHomeComponent Component');
    this.text = 'Hello FooterHome';
  }

}
