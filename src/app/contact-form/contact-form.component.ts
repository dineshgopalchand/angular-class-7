import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactMethod = [
    { id: 1 , name: 'phone'},
    { id: 2 , name: 'Post'},
    { id: 3 , name: 'Email', isselected : true},
    { id: 4 , name: 'Newletter'},
    { id: 5 , name: 'Location'},
  ];
  constructor() { }

  ngOnInit() {
  }

  submitFunction(form1) {
    console.log('form', form1);
    console.log('firstname', form1.value.firstname);
    console.log('lastname', form1.value.lastname);
    console.log('comment', form1.value.comment);
  }
  someKeyupFunction(input1: HTMLInputElement) {
    console.log(input1.value);
  }
}
