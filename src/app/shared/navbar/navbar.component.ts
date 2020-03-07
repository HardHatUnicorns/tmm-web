import { Component, OnInit } from '@angular/core';
import { version } from '../../../../package.json';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	appVersion: string;

	constructor() { }

	ngOnInit(): void {
		this.appVersion = version;
	}

}
