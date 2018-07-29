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
  qtylikes:number;
  qtycomments:number;
  qtyshare:number;

  constructor() {
    console.log('Hello FooterPostComponent Component');
    this.text = 'Hello FooterrPost';
    this.qtylikes = 5;
    this.qtycomments =2;
    this.qtyshare =1;
  }

}
