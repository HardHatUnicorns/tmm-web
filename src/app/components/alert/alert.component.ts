import { Component, OnInit, Input } from '@angular/core';
import { Alert } from 'src/app/models/Alert';
import { AlertService } from 'src/app/services/alert.service';

@Component({
	selector: 'app-alert',
	templateUrl: './alert.component.html',
	styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

	alert: Alert;

	constructor(private alertService: AlertService) { }

	ngOnInit(): void {
		this.alertService.changeEmitted$.subscribe(alert => {
			this.alert = alert;
		})
	}

	close(): void {
		this.alert = null;
	}

}
