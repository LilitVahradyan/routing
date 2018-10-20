import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostService } from '../../core/services/post.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit, OnDestroy {
  public post = {title: "", body: ""};
  public routeSubscription;
  constructor(private route:ActivatedRoute,
              private postService:PostService) { }

  ngOnInit() {
    this.routeSubscription = this.route.params
      .subscribe((data)=>{
        console.log(data['id']);
        this.postService.getPostById(data['id'])
          .subscribe((data)=>{
            this.post = data;
          })
      })
  }
  ngOnDestroy(){
    this.routeSubscription.unsubscribe();
  }
}
