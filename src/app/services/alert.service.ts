import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert } from '../models/Alert';

@Injectable({
	providedIn: 'root'
})
export class AlertService {

	// Observable string sources
	private emitChangeSource = new Subject<any>();
	// Observable string streams
	changeEmitted$ = this.emitChangeSource.asObservable();

	// Service message commands
	emitChange(alert: Alert) {
		this.emitChangeSource.next(alert);
	}
}
