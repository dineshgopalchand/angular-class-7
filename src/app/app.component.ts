import { Component } from '@angular/core';
import { FavReturn } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Class';
  isFavourite = false;
  favCount = 35;
  favoriteChange(args: FavReturn) {
    console.log('event on change  of fav  component');
    console.log(args);
    if (args.selected) {
      this.favCount += 1;
    } else {
      this.favCount -= 1;
    }
  }
}
