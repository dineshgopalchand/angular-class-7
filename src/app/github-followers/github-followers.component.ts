import { Component, OnInit } from '@angular/core';
import { GitFollowerService, GitDataFormat } from '../common/services/git-follower.service';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  gitFollowers: GitDataFormat[];
  constructor(private gitService: GitFollowerService) { }

  ngOnInit() {
    this.gitService.getAll()
      .subscribe(data => {
        this.gitFollowers = data;
        // console.log(this.gitFollowers);
        // console.log(this.gitFollowers[0].avatar_url);
      });
  }

}
