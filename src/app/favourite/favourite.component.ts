import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  // isFavourite = true;
  // tslint:disable-next-line:no-input-rename
  @Input('isFavourite') isSelected;
  // tslint:disable-next-line:no-output-rename
  @Output('favElementChange') change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  changeStatus() {
    this.isSelected = !this.isSelected;
    this.change.emit({ selected : this.isSelected, color : 'red'});
    console.log('emit get called');
  }

}


export interface FavReturn {
  selected: boolean;
  color: string;
}
