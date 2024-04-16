import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationResponseData, AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
	selector: 'app-authentication',
	templateUrl: './authentication.component.html',
	styleUrl: './authentication.component.scss',
})
export class AuthenticationComponent {
	isLogInMode = true;
	isLoading = false;
	error: string = null;

	constructor(private authenticationService: AuthenticationService, private router: Router) {}

	onSwitchMode() {
		this.isLogInMode = !this.isLogInMode;
	}

	onSubmit(form: NgForm) {
		// console.log(form.value);
		if (!form.valid) return;
		const email = form.value.email;
		const password = form.value.password;

		let authenticationObservable: Observable<AuthenticationResponseData>;

		this.isLoading = true;
		this.error = null;

		if (this.isLogInMode) {
			authenticationObservable = this.authenticationService.logIn(email, password);
		} else {
			authenticationObservable = this.authenticationService.signUp(email, password);
		}
		authenticationObservable.subscribe(
			(responseData) => {
				console.log(responseData);
				this.isLoading = false;
				this.router.navigate(['/dashboard/home']);
			},
			(errorMessage) => {
				console.log(errorMessage);
				this.error = errorMessage;
				this.isLoading = false;
			}
		);

		form.reset();
	}
}
