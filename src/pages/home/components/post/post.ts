import { Component } from '@angular/core';

/**
 * Generated class for the PostComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-post',
  templateUrl: 'post.html'
})
export class PostComponent {

  text: string;
  img: string;
  constructor() {
    console.log('Hello PostComponent Component');
    this.text = 'Hello PostComponent';
    this.img = 'https://picsum.photos/200/300/?gravity=east';
  }

}
