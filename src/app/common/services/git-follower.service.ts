import { Injectable } from '@angular/core';
import { AppService } from './app-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitFollowerService extends AppService {
  constructor(http: HttpClient) {
    const url = 'https://api.github.com/users/bradlygreen/followers';
    super(http, url);
   }

}



export class GitDataFormat {
  'login': string;
  'id': number;
  'node_id': string;
  'avatar_url': string;
  'gravatar_id': string;
  'url': string;
  'html_url': string;
  'followers_url': string;
  'following_url': string;
  'gists_url': string;
  'starred_url': string;
  'subscriptions_url': string;
  'organizations_url': string;
  'repos_url': string;
  'events_url': string;
  'received_events_url': string;
  'type': string;
  'site_admin': boolean;
}
