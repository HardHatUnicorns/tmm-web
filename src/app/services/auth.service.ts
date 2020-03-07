import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	apiUrl: string = 'http://localhost:8080/api/';
	httpOptions = {
		headers: new HttpHeaders({
			'content-type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		})
	};

	constructor(private http: HttpClient) { }

	registerUser(user: User): Observable<Response> {
		return this.http.post<Response>(`${this.apiUrl}user/register`, user, this.httpOptions);
	}
}
