import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('RegisterComponent', () => {
	let component: RegisterComponent;
	let fixture: ComponentFixture<RegisterComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				FormsModule,
				ReactiveFormsModule,
				HttpClientModule
			],
			declarations: [RegisterComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RegisterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('email input', () => {

		it('should be invalid with default value', () => {
			let email = component.registerForm.controls['email'];
			expect(email.valid).toBeFalsy();
		});

		it('should be invalid with empty value', () => {
			let email = component.registerForm.controls['email'];
			email.setValue('');
			expect(email.valid).toBeFalsy();
		});

		it('should be invalid with wrong formated email', () => {
			let email = component.registerForm.controls['email'];
			email.setValue('example');
			expect(email.valid).toBeFalsy();
			email.setValue('@');
			expect(email.valid).toBeFalsy();
			email.setValue('example@');
			expect(email.valid).toBeFalsy();
			email.setValue('@example');
		});

		it('should be invalid with corect formated email', () => {
			let email = component.registerForm.controls['email'];
			email.setValue('example@example.com');
			expect(email.valid).toBeTruthy();
		});
	});

	describe('login input', () => {

		it('should be invalid with default value', () => {
			let login = component.registerForm.controls['login'];
			expect(login.valid).toBeFalsy();
		});

		it('should be invalid with login to short', () => {
			let login = component.registerForm.controls['login'];
			login.setValue('asd');
			expect(login.valid).toBeFalsy();
		});

		it('should be invalid with login to long', () => {
			let login = component.registerForm.controls['login'];
			login.setValue('asdf23jklf34j@!klf3j4lkfj34lkfj34lfj34$oijhfi9o03novn34iov%$niop34v03hv0934903g_');
			expect(login.valid).toBeFalsy();
		});

		it('should be valid with correct format', () => {
			let login = component.registerForm.controls['login'];
			login.setValue('example_123');
			expect(login.valid).toBeTruthy();
		});

	});

	describe('password input', () => {

		it('should be invalid with default value', () => {
			let plainPassword = component.registerForm.controls['plainPassword'];
			expect(plainPassword.valid).toBeFalsy();
		});

		it('should be invalid with password too short', () => {
			let plainPassword = component.registerForm.controls['plainPassword'];
			plainPassword.setValue('d1E2');
			expect(plainPassword.valid).toBeFalsy();
		});

		it('should be invalid with password too long', () => {
			let plainPassword = component.registerForm.controls['plainPassword'];
			plainPassword.setValue('d32kudfh23jkrhf2kj34hf3jk4hkfh34kjhvjkh34jkhjkHJKAHDJKAdhsh98aDHA*Hd98aHdasd98asdh89ashd98ashd9as80hd89ahsd1E2');
			expect(plainPassword.valid).toBeFalsy();
		});

		it('should be invalid without number', () => {
			let plainPassword = component.registerForm.controls['plainPassword'];
			plainPassword.setValue('ddasyduaSYDYUSUAydsaudyausda&*S&D&*A');
			expect(plainPassword.valid).toBeFalsy();
		});

		it('should be invalid without big letter', () => {
			let plainPassword = component.registerForm.controls['plainPassword'];
			plainPassword.setValue('kfjefik234jlfk34jfkl34jf0&*(&*(&*(&');
			expect(plainPassword.valid).toBeFalsy();
		});

		it('should be valid with correct formated', () => {
			let plainPassword = component.registerForm.controls['plainPassword'];
			plainPassword.setValue('k3D31**$ddsa');
			expect(plainPassword.valid).toBeTruthy();
		});

	});

	describe('password confirm input', () => {

		it('should be invalid with two different password', () => {
			let plainPassword = component.registerForm.controls['plainPassword'];
			plainPassword.setValue('k3D31**$ddsa');
			let plainPasswordConfirm = component.registerForm.controls['plainPasswordConfirm'];
			plainPasswordConfirm.setValue('fj4kl3jfk3l');
			expect(plainPasswordConfirm.valid).toBeFalsy();
		});

		it('should be valid with dentical password', () => {
			let plainPassword = component.registerForm.controls['plainPassword'];
			plainPassword.setValue('k3D31**$ddsa');
			let plainPasswordConfirm = component.registerForm.controls['plainPasswordConfirm'];
			plainPasswordConfirm.setValue('k3D31**$ddsa');
			expect(plainPasswordConfirm.valid).toBeTruthy();
		});

	});

});
