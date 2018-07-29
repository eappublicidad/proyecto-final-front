import { Post } from './../../../../models/post.model';
import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-post',
  templateUrl: 'post.html'
})
export class PostComponent implements OnInit {
  @Input() post: Post;

  agoTime: string;
  imgFriend: string;
  imgPost: string;
  nameFriend: string;
  messagePost: string;
  timePosted: string;

  constructor() {
  }
  hasPhoto() {
    return !!this.post.Photo || false;
  }
  authorHasPhoto() {
    return this.post.User && this.post.User.Photo && this.post.User.Photo.path || false;
  }
  ngOnInit(): void {
   if (this.post.Photo && this.post.Photo.path)
      this.post.Photo.path = this.post.Photo.path.replace('file/private', 'file/private/200x300');

    if (this.post.User && this.post.User.Photo && this.post.User.Photo.path)
      this.imgFriend = this.post.User.Photo.path.replace('file/private', 'file/private/200x300');

    if (this.post.User)
      this.nameFriend = this.post.User.firstName;

    this.agoTime = '1h';
  }
}