import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { error } from '@angular/compiler/src/util';

@Component({
	selector: 'app-auth-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

	@Output() toggleRegister: EventEmitter<any> = new EventEmitter();
	registerForm: FormGroup;

	loading: boolean = false;
	success: boolean;
	successMessage: string;
	error: boolean;
	errorMessage: string;

	constructor(private fb: FormBuilder, private authService: AuthService) { }

	ngOnInit(): void {
		this.registerForm = this.fb.group({
			email: '',
			login: '',
			plainPassword: ''
		})
	}

	register(): void {
		if (!this.loading) {
			this.loading = true;
			this.success = false;
			this.error = false;
			this.authService.registerUser(this.registerForm.value)
				.subscribe(
					res => {
						this.loading = false;
						this.success = true;
						this.successMessage = 'Successfully registered';
					},
					error => {
						this.loading = false;
						this.error = true;
						this.errorMessage = error.error.message;
					}
				);
		}
	}

	toggleForm(): void {
		this.toggleRegister.emit();
	}

}
