import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-auth-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

	registerForm: FormGroup;
	submited: boolean = false;

	constructor(private fb: FormBuilder, private authService: AuthService, private alertService: AlertService, private el: ElementRef, private router: Router) { }

	ngOnInit(): void {
		this.registerForm = this.fb.group({
			email: ['', [
				Validators.required,
				Validators.email
			]],
			login: ['', [
				Validators.required,
				Validators.minLength(6),
				Validators.maxLength(32)
			]],
			plainPassword: ['', [
				Validators.required,
				Validators.minLength(8),
				Validators.maxLength(64),
				Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)
			]],
			plainPasswordConfirm: ['', [
				Validators.required,
				Validators.minLength(8),
				Validators.maxLength(64),
				Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)
			]]
		});

		// Passwords must be identical
		this.registerForm.controls['plainPasswordConfirm'].valueChanges.subscribe(plainPasswordConfirm => {
			if (plainPasswordConfirm !== this.registerForm.controls['plainPassword'].value) {
				this.registerForm.controls['plainPasswordConfirm'].setErrors({ passwordMath: 'no' });
			} else {
				this.registerForm.controls['plainPasswordConfirm'].setErrors(null);
			}
		});
	}

	register(): void {
		if (!this.submited) {
			if (this.registerForm.valid) {
				this.submited = true;
				this.authService.registerUser(this.registerForm.value)
					.subscribe(
						res => {
							console.log(this.authService.generateAndSaveToken(this.registerForm.value.login, this.registerForm.value.plainPassword));
							this.alertService.emitChange({
								visible: true,
								type: 'success',
								strong: 'Successfully registered!',
								message: 'Check e-mail inbox to activate your account',
								small: '(You will be redirected to login page in 5 secounds)'
							});
							this.submited = false;
							setTimeout(() => this.router.navigateByUrl('/auth/login'), 5000);
						},
						error => {
							this.alertService.emitChange({
								visible: true,
								type: 'danger',
								message: error.error.errors[0].message
							});
							this.submited = false;
						}
					);
			} else {
				this.registerForm.markAllAsTouched();
				const invalidInputs: HTMLElement[] = this.el.nativeElement.querySelectorAll('input.ng-invalid');
				invalidInputs.forEach((element, index) => {
					setTimeout(() => {
						element.focus();
						element.blur();
					}, index * 1);
				});
			}
		}
	}

}
