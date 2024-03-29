import { IPost } from '../../../models/i-post.model';
import { PostService } from './../../post.service';
import { Component, DoCheck, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrl: './active-posts.component.scss'
})
export class ActivePostsComponent implements OnInit,DoCheck {

  public postService:PostService = inject(PostService);
  // constructor(private postService:PostService){}
  public postAttivi:IPost[]=[];

  ngOnInit(): void {
    this.postAttivi=this.postService.getActivePosts();
  }
  ngDoCheck(): void {
    this.postAttivi=this.postService.getActivePosts();
  }
}
