import { Component } from '@angular/core';

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
    this.title = 'Hello World';
    this.img = 'https://picsum.photos/200/300?image=0';
  }

}
