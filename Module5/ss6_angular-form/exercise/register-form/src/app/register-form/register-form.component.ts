import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Country} from '../Country';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    country: new FormControl('',Validators.required),
    age: new FormControl('',[Validators.required,Validators.min(18)]),
    gender: new FormControl(),
    phone: new FormControl('', [Validators.required, Validators.pattern('[+][8][4][ ][0-9]{9,10}')])
  });
  countryList: Country[]= [
    { id: 1, name: 'VietNam' },
    { id: 2, name: 'USA' },
    { id: 3, name: 'Korea' },
    { id: 4, name: 'England' }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  get regForm() {
    return this.registerForm.controls;
  }

  create() {
    console.log(this.registerForm.value);
  }
}
