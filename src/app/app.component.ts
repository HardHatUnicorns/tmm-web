import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

// Ignore JQuery
declare var $: any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(private router: Router, private http: HttpClient) {
		router.events.subscribe(e => {
			// Hide mobile bootstrap menu
			$('.collapse').collapse('hide');
		});
	}
}
