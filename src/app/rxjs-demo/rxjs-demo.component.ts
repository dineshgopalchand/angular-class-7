import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.css']
})
export class RxjsDemoComponent implements OnInit {
  // githubUsers = `https://api.github.com/error`;
  githubUsers = `https://api.github.com/users?per_page=2`;
  constructor() { }
  gitResponse: any;
  ngOnInit() {
    const users = ajax.getJSON(this.githubUsers);

    const subscribe = users.subscribe(
      res => {
        console.log(res);
        this.gitResponse = res;
      },
      err => console.error(err)
    );
  }

}
