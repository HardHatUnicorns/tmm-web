import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutComponent } from './logout.component';
import { RouterModule, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('LogoutComponent', () => {
	let component: LogoutComponent;
	let fixture: ComponentFixture<LogoutComponent>;

	let authService;
	let router;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LogoutComponent],
			imports: [
				RouterModule,
				RouterTestingModule,
				HttpClientModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LogoutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

});
