import { TestBed } from '@angular/core/testing';

import { IsAuthGuard } from './is-auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('IsAuthGuard', () => {
	let guard: IsAuthGuard;
	let authService;
	let router;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientModule,
				RouterModule,
				RouterTestingModule
			]
		});
		guard = TestBed.inject(IsAuthGuard);
	});

	it('should be created', () => {
		expect(guard).toBeTruthy();
	});

	it('should return true for a logged in user', () => {
		authService = { isUserAuthenticated: () => true };
		guard = new IsAuthGuard(authService, router);
		expect(guard.canActivate()).toBeTrue();
	});

	it('should navigate to `/user/login` for a not logged in user', () => {
		authService = { isUserAuthenticated: () => false };
		router = { navigateByUrl: jasmine.createSpy('navigateByUrl') };
		guard = new IsAuthGuard(authService, router);
		guard.canActivate();
		expect(router.navigateByUrl).toHaveBeenCalledWith('/auth/login');
	});

});
