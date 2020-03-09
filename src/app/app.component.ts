import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

// Scripts 
import { Scripts } from '../scripts';

// Ignore JQuery
declare var $: any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(private router: Router, private http: HttpClient) {
		// Call every time on loading new route
		router.events.subscribe(e => {
			// Import scripts
			const sc = new Scripts();
			// Hide mobile bootstrap menu
			$('.collapse').collapse('hide');
			// Toggle all tooltips
			$('[data-toggle="tooltip"]').tooltip('hide');
			$(function () {
				$('[data-toggle="tooltip"]').tooltip();
				sc.loadInputs();
			});
		});
	}
}
