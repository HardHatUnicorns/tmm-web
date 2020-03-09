import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
	selector: 'app-auth-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

	@Output() message: EventEmitter<string> = new EventEmitter();
	registerForm: FormGroup;

	inProgress: boolean = false;

	constructor(private fb: FormBuilder, private authService: AuthService) { }

	ngOnInit(): void {
		this.registerForm = this.fb.group({
			email: '',
			login: '',
			plainPassword: ''
		})
	}

	register(): void {
		if (!this.inProgress) {
			this.inProgress = true;
			this.authService.registerUser(this.registerForm.value)
				.subscribe(
					res => {
						// Success
						this.inProgress = false;
						this.message.emit(JSON.stringify(res));
					},
					error => {
						// Error
						this.inProgress = false;
						this.message.emit(JSON.stringify(error.error));
					}
				);
		}
	}

}
