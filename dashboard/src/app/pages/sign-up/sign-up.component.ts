import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminAuthService } from '../../services/admin-auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  isLoading: boolean = false;
  apiError: string = '';
  constructor(
    private _AdminAuthService: AdminAuthService,
    private _Router: Router
  ) {
    if (localStorage.getItem('userToken') !== null) {
      // this._Router.navigate(['/Home']);
    }
  }
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null, []),
  });

  handelRegister(registerForm: FormGroup) {
    this.isLoading = true;
    if (registerForm.valid) {
      this._AdminAuthService.register(registerForm.value).subscribe({
        next: (response) => {
          this.isLoading = false;
          if (response.message == 'success') {
            this._Router.navigate(['/login']);
          }
        },
        error: (err) => {
          this.isLoading = false;
          this.apiError = err.error.message;
        },
      });
    }
    console.log(registerForm);
  }
}
