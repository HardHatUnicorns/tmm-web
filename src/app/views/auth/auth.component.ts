import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

	register: boolean = false;

	constructor() { }

	ngOnInit(): void {
	}

	toggleRegister(): void {
		this.register = !this.register;
	}

}
