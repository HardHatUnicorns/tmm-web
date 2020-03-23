import { TestBed } from '@angular/core/testing';

import { AlertService } from './alert.service';

describe('AlertService', () => {
	let service: AlertService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(AlertService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should emmit alert', (done: DoneFn) => {
		service.changeEmitted$.subscribe(alert => {
			expect(alert).toEqual({ visible: true, type: 'info', message: 'TEST MESSAGE' });
			done();
		});
		service.emitChange({ visible: true, type: 'info', message: 'TEST MESSAGE' });
	});
});
