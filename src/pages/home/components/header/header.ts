import { Component, style } from '@angular/core';

/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  title: string;
  img:string;

  constructor() {
    console.log('Hello HeaderComponent Component');
    this.title = 'HOY';
    this.img = 'https://picsum.photos/200/200?image=0';
  }

}
