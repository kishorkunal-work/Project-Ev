import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isChangePasswordOn: boolean = false

  ngOnInit(): void {
  }

  loginform: FormGroup;
  passwordChangeform: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private _loginService: LoginService) {

    this.loginform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, , Validators.minLength(2)]],
    });

    this.passwordChangeform = this.fb.group({
      oldpassword: ['', [Validators.required, , Validators.minLength(6)]],
      password: ['', [Validators.required, , Validators.minLength(6)]],
      confirmpassword: ['', [Validators.required, , Validators.minLength(6)]],
    })
  }

  async onLoginSubmit() {
    if (this.loginform.valid) {
      var result = await this._loginService.signIn(this.loginform.value);
      if (result) {
        this.router.navigateByUrl('/registerpolicy');
      }
    } else {
      let temp = this.loginform.controls['name'];
      console.log('the controls', this.loginform.controls);
      console.log('name form', temp);
      Object.keys(this.loginform.controls).forEach(key => {
        this.loginform.get(key).markAsTouched();
      });
    }

  }
  onLoginReset(): void {
    this.loginform.reset();
  }

  changePassword() {
    this.isChangePasswordOn = true;
  }

  backToLogin() {
    this.isChangePasswordOn = false;
  }

}
