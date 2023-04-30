import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/postservice/post.service';
import { ToastrService } from 'ngx-toastr';
import { Message } from 'primeng/api';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit{
  newPost: Post = new Post();
  messages!: Message[];
  constructor(private postService: PostService,private toastr: ToastrService) { }

  ngOnInit() {
  }
  onSubmit() {
    this.postService.addPost(this.newPost.text).subscribe((createdPost) => {
      console.log('Post created successfully', createdPost);
      this.newPost.text = ''; // réinitialiser le champ de texte
      this.messages = [{ severity: 'success', summary: 'Success', detail: 'Message Content' }];
      setTimeout(() => {
        location.reload();
      }, 700); 
      this.toastr.success('Publication ajoutée avec succès');
    },
    (error) => {
      console.error('Failed to create post', error);
    }
  );
    this.newPost = new Post();
  }

  


}
