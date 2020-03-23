import { TestBed } from '@angular/core/testing';

import { IsAuthGuard } from './is-auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('IsAuthGuard', () => {
	let guard: IsAuthGuard;

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
});
