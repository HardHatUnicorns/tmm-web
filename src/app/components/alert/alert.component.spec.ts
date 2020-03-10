import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { AlertComponent } from './alert.component';
import { AlertService } from 'src/app/services/alert.service';

describe('AlertComponent', () => {
	let component: AlertComponent;
	let fixture: ComponentFixture<AlertComponent>;
	let alertService: AlertService;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AlertComponent],
			providers: [AlertService]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		alertService = new AlertService();
		fixture = TestBed.createComponent(AlertComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should display input message', () => {
		component.alert = {
			visible: true,
			type: 'info',
			message: 'TEST MESSAGE'
		};
		fixture.detectChanges();
		let messageElement: HTMLElement = fixture.nativeElement.querySelector('span.message');
		expect(messageElement.innerHTML).toContain('TEST MESSAGE');
	});

	it('should have class defined by type', () => {
		component.alert = {
			visible: true,
			type: 'info',
			message: 'TEST MESSAGE'
		};
		fixture.detectChanges();
		let alertElement: HTMLElement = fixture.nativeElement.querySelector('div.alert');
		expect(alertElement.classList.contains(`alert-${component.alert.type}`)).toBeTruthy();
	});

	it('should destroy after clicking close button', () => {
		component.alert = {
			visible: true,
			type: 'info',
			message: 'TEST MESSAGE'
		};
		fixture.detectChanges();
		let buttonElement: HTMLElement = fixture.debugElement.nativeElement.querySelector('button.close');
		buttonElement.click();
		expect(component.alert).toBeNull();
	});

	it('should get alert data when alert was emmited', (done: DoneFn) => {
		alertService.changeEmitted$.subscribe(alert => {
			expect(alert).toEqual({ visible: true, type: 'info', message: 'TEST MESSAGE' });
			done();
		});
		alertService.emitChange({ visible: true, type: 'info', message: 'TEST MESSAGE' });
	});
});
