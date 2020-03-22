import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
	selector: 'app-auth-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	loginForm: FormGroup;

	constructor(private fb: FormBuilder, private authService: AuthService, private alertService: AlertService) { }

	ngOnInit(): void {
		this.loginForm = this.fb.group({
			login: '',
			plainPassword: ''
		});
	}

	loginUser(): void {
		this.authService.loginUser(this.loginForm.value).subscribe(
			res => {
				this.alertService.emitChange({
					visible: true,
					type: 'success',
					message: 'Valid credentials'
				});
			}, error => {
				this.alertService.emitChange({
					visible: true,
					type: 'danger',
					message: 'Invalid credentials',
					small: '(your account may not be activated)'
				});
			}
		);
	}

}
