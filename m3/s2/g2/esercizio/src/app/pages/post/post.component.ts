import { Component, Input } from '@angular/core';
import { IPost } from '../../../models/i-post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
@Input() post!:IPost;
}
