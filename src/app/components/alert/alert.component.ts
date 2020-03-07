import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-alert',
	templateUrl: './alert.component.html',
	styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

	@Input() alertType: string;
	@Input() strong: string;
	@Input() message: string;

	constructor() { }

	ngOnInit(): void {
	}

	alertClass(): string {
		return `alert-${this.alertType}`;
	}

}
