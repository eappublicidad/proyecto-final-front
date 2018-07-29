import { Component } from '@angular/core';
import { Text } from '@angular/compiler';

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

  imgFriend: string;
  imgPost: string;
  nameFriend: string;
  messagePost: string;
  timePosted: string;

  constructor() {
    console.log('Hello PostComponent Component');
    this.imgPost = 'https://picsum.photos/200';
    this.imgFriend = 'https://picsum.photos/200/300/?gravity=east';
    this.nameFriend = 'Carolina J';
    this.messagePost = 'Este paisaje esta hermoso';
    this.timePosted ='1h';
  }

}
