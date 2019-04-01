import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from '../common/validator/username.validator';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signIn: FormGroup ;
  constructor() {
    this.signIn = new FormGroup({
      account : new FormGroup({ // for nested form group
        username : new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          UsernameValidators.cannotContainSpace    // Sync Custom Validator Function
        ], [
          UsernameValidators.uniqueUserName       // Async Custom Validator Function
        ])
      }),
      password : new FormControl('', Validators.required)
    });
   }

  ngOnInit() {
  }
  formInput() {
    console.log(this.username);
  }

  get username() {
    return this.signIn.get('account.username');
  }
  get password() {
    return this.signIn.get('password');
  }
  formSubmit() {
    console.log(this.signIn);
    console.log(this.username.value);
    console.log(this.password.value);
    this.signIn.setErrors({ formError: true});
  }
}
