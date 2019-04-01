import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-and-event',
  templateUrl: './data-and-event.component.html',
  styleUrls: ['./data-and-event.component.css']
})
export class DataAndEventComponent implements OnInit {
  title = 'Data and Event';
  buttonContent = 'Save';
  rowspan = 2;
  colspan = 2;
  isActive = false;
  fontColor = 'red';
  errorColor = 'red';
  successColor = 'blue';
  inputVal = 'Dinesh';
  // fontColor = '#ff0000';
  // isDanger = false;
  imgSrc = 'https://dummyimage.com/300x200/eddced/0011ff';
  constructor() { }

  ngOnInit() {
  }

  logFunction() {
    // console.log('this is log message');
    console.log('this is parent Div');
  }
  changeStatus($event: Event) {
    $event.stopPropagation();
    // console.log($event.target.value);
    this.isActive = !this.isActive;
    console.log('Event Value', $event);
  }
  // showValue($event) {
  //   // if ($event.keyCode === 13) {
  //   this.inputVal = $event.target.value;
  //   // }
  //   console.log($event);
  // }

  showValue(firstName) {
    // if ($event.keyCode === 13) {
    this.inputVal = firstName.value;
    // }
    console.log(firstName);
    firstName.value = '';
  }

}
