import { Component } from '@angular/core';
import { AuthenticationService } from '../../pages/authentication/authentication.service';

@Component({
	selector: 'app-side-nav',
	templateUrl: './side-nav.component.html',
	styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {
	constructor(private authenticationService: AuthenticationService) {}

	onLogOut() {
		this.authenticationService.logOut();
	}
}
