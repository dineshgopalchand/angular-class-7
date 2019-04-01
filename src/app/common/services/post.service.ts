import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { extend } from 'webdriver-js-extender';
import { AppService } from './app-service';


@Injectable({
  providedIn: 'root'
})
export class PostService extends AppService {

  constructor(http: HttpClient) {
    const url = 'http://localhost:3000/posts';
    super(http, url);
  }
  // posts = [];
}
