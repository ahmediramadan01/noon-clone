// import { inject } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { AuthenticationService } from './authentication.service';
// import { Observable, map } from 'rxjs';

// export const authenticationGuardFn: CanActivateFn = (
// 	route: ActivatedRouteSnapshot,
// 	state: RouterStateSnapshot
// ): Observable<boolean | UrlTree> => {
// 	const router = inject(Router);
// 	const authenticationService = inject(AuthenticationService);
// 	return authenticationService.user.pipe(
// 		map((user) => {
// 			const isAuthenticated = !!user;
// 			if (isAuthenticated) {
// 				return true;
// 			}
// 			return router.createUrlTree(['/']);
// 		})
// 	);
// };
