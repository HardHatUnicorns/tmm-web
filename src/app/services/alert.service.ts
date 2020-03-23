import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert } from '../models/Alert';

@Injectable({
	providedIn: 'root'
})
export class AlertService {

	private emitChangeSource = new Subject<any>();
	changeEmitted$ = this.emitChangeSource.asObservable();

	emitChange(alert: Alert) {
		this.emitChangeSource.next(alert);
	}

	clearAlerts(): void {
		this.emitChangeSource.next(null);
	}
}
