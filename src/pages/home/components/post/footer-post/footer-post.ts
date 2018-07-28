import { Component } from '@angular/core';

/**
 * Generated class for the PostComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-footer-post',
  templateUrl: 'footer-post.html'
})
export class FooterPostComponent {

  text: string;

  constructor() {
    console.log('Hello FooterPostComponent Component');
    this.text = 'Hello FooterrPost';
  }

}
