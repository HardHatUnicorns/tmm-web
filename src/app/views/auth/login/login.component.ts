import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-auth-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	loginForm: FormGroup;
	loading: boolean = false;

	constructor(private fb: FormBuilder, private authService: AuthService, private alertService: AlertService, private router: Router, private el: ElementRef) { }

	ngOnInit(): void {
		this.loginForm = this.fb.group({
			login: '',
			plainPassword: ''
		});
	}

	loginUser(): void {
		if (!this.loading) {
			if (this.loginForm.valid) {
				this.loading = true;
				this.authService.loginUser(this.loginForm.value).subscribe(
					res => {
						this.alertService.emitChange({
							visible: true,
							type: 'success',
							message: 'Valid credentials'
						});
						this.router.navigateByUrl('/user/dashboard');
					}, error => {
						this.loading = false;
						this.alertService.emitChange({
							visible: true,
							type: 'danger',
							message: 'Invalid credentials',
							small: '(your account may not be activated)'
						});
						this.authService.deleteToken();
					}
				);
			} else {
				this.loginForm.markAllAsTouched();
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
