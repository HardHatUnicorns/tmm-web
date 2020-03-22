import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	token: string = window.localStorage.getItem('basic-token') || null;

	apiUrl: string = 'http://localhost:8080/api/';
	httpOptions = {
		headers: new HttpHeaders({
			'content-type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		})
	};
	authHttpOptions = {
		headers: new HttpHeaders({
			'content-type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Authorization': this.token
		})
	};

	constructor(private http: HttpClient) { }

	registerUser(user: User): Observable<Response> {
		return this.http.post<Response>(`${this.apiUrl}user/register`, user, this.httpOptions);
	}

	loginUser(user: User): Observable<Response> {
		this.generateAndSaveToken(user.login, user.plainPassword);
		return this.http.post<Response>(`${this.apiUrl}user/authentication`, {}, this.authHttpOptions);
	}

	generateAndSaveToken(username: string, password: string): void {
		const tk = 'Basic ' + btoa(username + ':' + password);
		window.localStorage.setItem('basic-token', tk);

		// Refresh token and headers
		this.token = tk;
		this.authHttpOptions = {
			headers: new HttpHeaders({
				'content-type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Authorization': this.token
			})
		};
	}
}
