import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';
import { UsernameValidators } from '../common/validator/username.validator';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  form;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(4),
        UsernameValidators.cannotContainSpace
      ]],
      topics: fb.array([]),
      contact: fb.group({
        email: [],
        phone: []
      })
    });
    // this.form = new FormGroup({
    //   name: new FormControl(),
    //   topics: new FormArray([]),
    //   contact: new FormGroup({
    //     email: new FormControl(),
    //     phone: new FormControl()
    //   })
    // });

   }

  ngOnInit() {
  }

}
