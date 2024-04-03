import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../../models/iuser';
import { AdminAuthService } from '../../services/admin-auth.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  fillform: boolean = false;
  userLoginForm: FormGroup;
  user: IUser = {} as IUser;
  checked: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private adminAuth: AdminAuthService,
    public tost: NgToastService
  ) {
    this.userLoginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern('[a-z1-9]{6}')]],
    });
  }

  logCheck(e) {
    this.checked = e.target.checked;
  }

  get email() {
    return this.userLoginForm.get('email');
  }
  get password() {
    return this.userLoginForm.get('password');
  }

  moveToRegister() {
    this.router.navigate(['/register']);
  }

  loginFunc() {
    const val = this.userLoginForm.value;
    if (val.email && val.password) {
      this.router.navigateByUrl('/');
      console.log(val.name);

      // this.adminAuth.login(val.name, val.password).subscribe({
      //   next: (data) => {
      //     this.checked
      //       ? this.adminAuth.setCookie(data)
      //       : this.adminAuth.setSession(data);

      //     this.router.navigateByUrl('/');
      //   },
      //   error: (err) => {
      //     this.tost.error({
      //       detail: 'Error',
      //       summary: err.error.message,
      //       duration: 5000,
      //     });
      //   },
      // });
    } else {
      this.fillform = true;
    }
  }
}
