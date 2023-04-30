import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { Comment } from 'src/app/models/comment';
import { PostService } from 'src/app/services/postservice/post.service';
import * as moment from 'moment';
import { interval, startWith, switchMap } from 'rxjs';
import { Rating } from 'src/app/models/rating';
import { NgForm } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import * as AOS from 'aos';
@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  posts: Post[] =[];
 post: Post = new Post;
  newCommentText = "";
  newRating!: number;
value!:number;

  constructor(private postService: PostService, private route: ActivatedRoute) {
     // Utiliser un intervalle pour récupérer les publications toutes les 5 secondes
    
   }
  ngOnInit(): void {
    AOS.init();
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
      for (const post of this.posts) {
        this.postService.getCommentsByPostId(post.id).subscribe(comments => {
          post.comments = comments;
        });
        post.rating = post.rating;
      }
      
    });
    
   

  }

  getPostscom(): void {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
      for (let post of this.posts) {
        this.postService.getCommentsByPostId(post.id).subscribe(comments => {
          post.comments = comments;
        });
      }
    });
  }
  formatDate(date: string): string {
    return moment(date).fromNow();
  }


  showCommentBox(post: Post) {
    post.showCommentForm = true;
  }
  submitComment(post: Post,commentForm: NgForm) {
    const newComment = new Comment();
    newComment.text = this.newCommentText;
    newComment.date = new Date().toISOString();
    newComment.post_id = post.id;
    
    this.postService.addComment(post.id, newComment.text).subscribe((content: Comment) => {
      post.comments.push(content);
      post.commentCount++;
      post.newCommentText = '';
      commentForm.resetForm();
      // Récupérer tous les commentaires pour le post donné
    this.postService.getCommentsByPostId(post.id).subscribe((comments: Comment[]) => {
      post.comments = comments;
    });
    });
  }

  addRating( post:Post , newRating: number):void {
  
   
    this.postService.addRating(post.id, newRating).subscribe((response: Rating) => {
      // Update the post rating and rating count
      post.ratings.push(response);
    });
  }

  
  






  
}


