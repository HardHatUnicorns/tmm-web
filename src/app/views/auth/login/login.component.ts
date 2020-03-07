import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-auth-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	@Output() toggleRegister: EventEmitter<any> = new EventEmitter();
	loginForm: FormGroup;

	constructor(private fb: FormBuilder) { }

	ngOnInit(): void {
		this.loginForm = this.fb.group({
			login: '',
			password: ''
		});
	}

}
