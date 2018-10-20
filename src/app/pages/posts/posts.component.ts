import { Component, OnInit } from '@angular/core';

import { PostService } from '../../core/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public postData:Array<any>;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts()
      .subscribe((data)=>{
        console.log(data);
        this.postData = data;
      },(err)=>{
        console.log(err);
      })
  }

}
