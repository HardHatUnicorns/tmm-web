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

			it('should be invalid with login to short', () => {
				let login = component.loginForm.controls['login'];
				login.setValue('short');
				expect(login.valid).toBeFalsy();
			});

			it('should be invalid with login to long', () => {
				let login = component.loginForm.controls['login'];
				login.setValue('logn123login12logn123login123logn123login123logn123login123logn123login123logn123login123logn123login1233');
				expect(login.valid).toBeFalsy();
			});

			it('should be valid with correct login', () => {
				let login = component.loginForm.controls['login'];
				login.setValue('correctlogin');
				expect(login.valid).toBeTruthy();
			});

		});

		describe('login input', () => {

			it('should be invalid with default value', () => {
				let password = component.loginForm.controls['plainPassword'];
				expect(password.valid).toBeFalsy();
			});

			it('should be invalid with password to short', () => {
				let password = component.loginForm.controls['login'];
				password.setValue('short');
				expect(password.valid).toBeFalsy();
			});

			it('should be invalid with password to long', () => {
				let password = component.loginForm.controls['login'];
				password.setValue('logn123login12logn123login123logn123login123logn123login123logn123login123logn123login123logn123login1233');
				expect(password.valid).toBeFalsy();
			});

			it('should be invalid with password to long', () => {
				let password = component.loginForm.controls['login'];
				password.setValue('logn123login12logn123login123logn123login123logn123login123logn123login123logn123login123logn123login1233');
				expect(password.valid).toBeFalsy();
			});

			it('should be invalid without number', () => {
				let plainPassword = component.loginForm.controls['plainPassword'];
				plainPassword.setValue('ddasyduaSYDYUSUAydsaudyausda&*S&D&*A');
				expect(plainPassword.valid).toBeFalsy();
			});

			it('should be invalid without big letter', () => {
				let plainPassword = component.loginForm.controls['plainPassword'];
				plainPassword.setValue('kfjefik234jlfk34jfkl34jf0&*(&*(&*(&');
				expect(plainPassword.valid).toBeFalsy();
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

});
