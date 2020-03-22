import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

// Scripts 
import { Scripts } from '../scripts';
import { AlertService } from './services/alert.service';

// Ignore JQuery
declare var $: any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(private router: Router, private http: HttpClient, private alertService: AlertService) {
		// Call every time on loading new route
		router.events.subscribe(e => {
			// Import scripts
			const sc = new Scripts();
			// Hide mobile bootstrap menu
			$('.collapse').collapse('hide');
			// Toggle all tooltips
			$('[data-toggle="tooltip"]').tooltip('hide');
			$(function () {
				sc.loadInputs();
				setTimeout(() => sc.loadInputs(), 500);
				$('[data-toggle="tooltip"]').tooltip();
			});

			// Hidde all alert boxes
			alertService.clearAlerts();
		});
	}
}
