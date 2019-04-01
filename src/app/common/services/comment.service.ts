import { Injectable } from '@angular/core';
import { AppService } from './app-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService extends AppService {

  constructor(http: HttpClient) {
    const url = 'http://localhost:3000/comments';
    super(http, url);
  }
}
