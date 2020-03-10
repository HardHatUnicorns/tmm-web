import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
	selector: 'app-auth-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

	registerForm: FormGroup;
	submited: boolean = false;

	constructor(private fb: FormBuilder, private authService: AuthService, private alertService: AlertService) { }

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
		})
	}

	register(): void {
		if (!this.submited) {
			this.submited = true;
			this.authService.registerUser(this.registerForm.value)
				.subscribe(
					res => {
						this.alertService.emitChange({ visible: true, type: 'success', message: 'Registered' });
						this.submited = false;
					},
					error => {
						this.alertService.emitChange({ visible: true, type: 'danger', message: 'ERROR' });
						this.submited = false;
					}
				);
		}
	}

}
