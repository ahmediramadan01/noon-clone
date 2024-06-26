import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './pages/authentication/authentication.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
	constructor(private authenticationService: AuthenticationService) {}

	ngOnInit() {
		this.authenticationService.autoLogIn();
	}
}
