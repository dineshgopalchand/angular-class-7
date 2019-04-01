import { Component, OnInit, DoCheck, OnChanges } from '@angular/core';
import { PostService } from '../common/services/post.service';
// import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts = [];

  // constructor(private http: HttpClient) {
  //   console.log('inside constructor');
  //   //  console.log('return', this.someFunction());
  // }
  constructor(private postService: PostService) {
    console.log('inside constructor');
    //  console.log('return', this.someFunction());
  }
  // ngOnChanges() {
  //   console.log('ngOnChanges');
  // }
  // ngDoCheck() {
  //   console.log('ngDoCheck');
  // }
  ngOnInit() {
    console.log('this is from ngOnInit');
    this.postService.getAll()
      .subscribe((response) => {
        console.log(response);
        this.posts = (response as []);
      });
  }

  createNewPost(newPost: HTMLInputElement) {
    console.log(newPost.value);
    const post = { title: newPost.value, body: 'Some dummy details' };
    this.postService.create(post)
      .subscribe(data => {
        console.log(data);
        this.posts.splice(0, 0, data);
      });
    newPost.value = '';
  }
  removePost(post) {
    this.postService.remove(post)
      .subscribe(response => {
        console.log(response);
        const indexVal = this.posts.indexOf(post);
        this.posts.splice(indexVal, 1);
      });
  }
  removePost1(post) {
    this.postService.remove(post);
  }
  updatePost(post: any) {
    //   .subscribe(responseData => {
    //     console.log(responseData);
    //   });
    post.isActive = true;
    post.body = 'this is updated body details';
    this.postService.update(post)
    .subscribe(responseData => {
      console.log(responseData);
    });
}




  // someFunction() {
  //   // this.http;
  //   setTimeout( () => {
  //     return 10;
  //   }, 2000);
  // }

}
