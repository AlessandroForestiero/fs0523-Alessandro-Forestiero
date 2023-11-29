import { Component, OnInit, inject, DoCheck } from '@angular/core';
import { IPost } from '../../../models/i-post.model';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrl: './inactive-posts.component.scss'
})
export class InactivePostsComponent implements OnInit,DoCheck {

public postService:PostService=inject(PostService);
public postInattivi:IPost[]=[];
ngOnInit():void {
  this.postInattivi=this.postService.getinActivePosts();
}
ngDoCheck(): void {
  this.postInattivi=this.postService.getinActivePosts();
}
}
