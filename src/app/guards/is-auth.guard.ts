import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
	providedIn: 'root'
})
export class IsAuthGuard implements CanActivate {

	constructor(private authService: AuthService, private router: Router) { }

	canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

		if (this.authService.isUserAuthenticated()) {
			return true;
		} else {
			this.router.navigateByUrl('/auth/login');
			return false;
		}
	}

}
