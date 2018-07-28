import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello StateComponent Component');
    this.text = 'Hello StateComponent';
  }

}
