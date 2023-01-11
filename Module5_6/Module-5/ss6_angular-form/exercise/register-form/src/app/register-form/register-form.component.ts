import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Country} from '../Country';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  // @ts-ignore
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required]),
    country: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.required, Validators.min(18)]),
    gender: new FormControl('',Validators.required),
    phone: new FormControl('', [Validators.required, Validators.pattern('[+][8][4][ ][0-9]{9,10}')])
  }, {validators: this.checkPassword(`password`, `confirmPassword`)});
  countryList: Country[] = [
    {id: 1, name: 'VietNam'},
    {id: 2, name: 'USA'},
    {id: 3, name: 'Korea'},
    {id: 4, name: 'England'}
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

  checkPassword(controlPass: string, matchingControlConfirm: string): any {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlPass];
      const matching = formGroup.controls[matchingControlConfirm];
      if (matching.errors && !matching.errors.checkPassword) {
        return;
      }
      if (control.value != matching.value) {
        return matching.setErrors({checkPassword: true});
      } else {
        return matching.setErrors(null);
      }
    };
  }
}
