import { Component } from '@angular/core';
import { AuthenticationService } from '../../pages/authentication/authentication.service';

@Component({
	selector: 'app-mobile-side-nav',
	templateUrl: './mobile-side-nav.component.html',
	styleUrl: './mobile-side-nav.component.scss',
})
export class MobileSideNavComponent {
	constructor(private authenticationService: AuthenticationService) {}

	onLogOut() {
		this.authenticationService.logOut();
	}
}
