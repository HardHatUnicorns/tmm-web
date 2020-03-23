import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
	let component: LoginComponent;
	let fixture: ComponentFixture<LoginComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				FormsModule,
				ReactiveFormsModule,
				HttpClientModule,
				RouterModule,
				RouterTestingModule
			],
			declarations: [LoginComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LoginComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('login form', () => {

		describe('login input', () => {

			it('should be invalid with default value', () => {
				let login = component.loginForm.controls['login'];
				expect(login.valid).toBeFalsy();
			});

			it('should be valid with correct login', () => {
				let login = component.loginForm.controls['login'];
				login.setValue('correctlogin');
				expect(login.valid).toBeTruthy();
			});

		});

		describe('password input', () => {

			it('should be invalid with default value', () => {
				let password = component.loginForm.controls['plainPassword'];
				expect(password.valid).toBeFalsy();
			});

			it('should be valid with correct password', () => {
				let password = component.loginForm.controls['login'];
				password.setValue('correctpassworD1');
				expect(password.valid).toBeTruthy();
			});

		});

	});

	describe('login submit', () => {

		it('shuld call method once when clicked on submit button', () => {
			spyOn(component, 'loginUser');
			let submitButton: HTMLElement = fixture.debugElement.nativeElement.querySelector('form button');
			submitButton.click();
			expect(component.loginUser).toHaveBeenCalledTimes(1);
		});

		it('shuld call login method when clicked on submit button', () => {
			spyOn(component, 'loginUser');
			let submitButton: HTMLElement = fixture.debugElement.nativeElement.querySelector('form button');
			submitButton.click();
			expect(component.loginUser).toHaveBeenCalled();
		});

	});

	describe('loading animation', () => {

		it('should be visible while waiting for api response', () => {
			component.loading = true;
			fixture.detectChanges();
			let animationElement: HTMLElement = fixture.debugElement.nativeElement.querySelector('.loading i');
			expect(animationElement).toBeTruthy();
		});

		it('should be not visible while not waiting for api response', () => {
			component.loading = false;
			fixture.detectChanges();
			let animationElement: HTMLElement = fixture.debugElement.nativeElement.querySelector('.loading i');
			expect(animationElement).toBeFalsy();
		});

	});

});
