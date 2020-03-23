import { Component, OnInit } from '@angular/core';
import { version } from '../../../../package.json';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

	appVersion: string;

	constructor() { }

	ngOnInit(): void {
		this.appVersion = version;
	}

}
