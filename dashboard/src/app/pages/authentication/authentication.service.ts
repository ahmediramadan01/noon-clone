import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

export interface AuthenticationResponseData {
	idToken: string;
	email: string;
	refreshToken: string;
	expiresIn: string;
	localId: string;
	kind: string;
	registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
	user = new Subject<User>();
	private tokenExpirationTimer: any;

	constructor(private http: HttpClient, private router: Router) {}

	signUp(email: string, password: string) {
		return this.http
			.post<AuthenticationResponseData>(
				'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBAL5Q9FIWY7YJ-mxEs7igNsqtCGk9bHF0',
				{
					email: email,
					password: password,
					returnSecureToken: true,
				}
			)
			.pipe(
				catchError(this.handleError),
				tap((responseData) => {
					this.handleAuthentication(
						responseData.email,
						responseData.localId,
						responseData.idToken,
						+responseData.expiresIn
					);
				})
			);
	}

	logIn(email: string, password: string) {
		return this.http
			.post<AuthenticationResponseData>(
				'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBAL5Q9FIWY7YJ-mxEs7igNsqtCGk9bHF0',
				{
					email: email,
					password: password,
					returnSecureToken: true,
				}
			)
			.pipe(
				catchError(this.handleError),
				tap((responseData) => {
					this.handleAuthentication(
						responseData.email,
						responseData.localId,
						responseData.idToken,
						+responseData.expiresIn
					);
				})
			);
	}

	autoLogIn() {
		const userData: { email: string; id: string; _token: string; _tokenExpirationDate: string } = JSON.parse(
			localStorage.getItem('userData')
		);
		if (!userData) return;

		const loggedInUser = new User(
			userData.email,
			userData.id,
			userData._token,
			new Date(userData._tokenExpirationDate)
		);
		if (loggedInUser.token) {
			this.user.next(loggedInUser);
			const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
			this.autoLogOut(expirationDuration);
		}
	}

	logOut() {
		this.user.next(null);
		this.router.navigate(['/']);
		localStorage.removeItem('userData');
		if (this.tokenExpirationTimer) clearTimeout(this.tokenExpirationTimer);
		this.tokenExpirationTimer = null;
	}

	autoLogOut(expirationDuration: number) {
		this.tokenExpirationTimer = setTimeout(() => {
			this.logOut();
		}, expirationDuration);
	}

	private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
		const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
		const user = new User(email, userId, token, expirationDate);
		this.user.next(user);
		this.autoLogOut(expiresIn * 1000);
		localStorage.setItem('userData', JSON.stringify(user));
	}

	private handleError(errorResponse: HttpErrorResponse) {
		let errorMessage = 'An error occurred';

		if (!errorResponse.error || !errorResponse.error.error) {
			return throwError(() => new Error(errorMessage));
		}

		errorMessage = errorResponse.error.error.message;
		return throwError(() => new Error(errorMessage));
	}
}
