import { User } from './../../../../models/user.model';
import { Proxy } from '../../../../helpers/proxy/proxy';
import { Component, OnInit } from '@angular/core';
import { Post } from '../../../../models/post.model';

@Component({
  selector: 'app-scroll',
  templateUrl: 'scroll.html'
})

export class ScrollComponent implements OnInit {
  posts: Post[];

  constructor(private proxy: Proxy) {
  }

  ngOnInit(): void {
    this.proxy.post.get('all')
      .then((result: { status: boolean, content: any }) => {
        var content = result.content;

        if (result.status) {
          var list = content[0].content;
          this.posts = new Array<Post>();

          for (var i in list)
            this.posts[i] = Post.build(list[i]);
        }
      }).catch(console.error);
  }
}