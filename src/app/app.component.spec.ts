import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './views/home-page/home-page.component';
import { UserComponent } from './views/user/user.component';
import { AuthComponent } from './views/auth/auth.component';
import { AboutComponent } from './views/about/about.component';
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { UserDashboardComponent } from './views/user/user-dashboard/user-dashboard.component';
import { AlertComponent } from './components/alert/alert.component';

describe('AppComponent', () => {

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				AppRoutingModule,
				BrowserModule,
				HttpClientModule,
				FormsModule,
				ReactiveFormsModule,
				BrowserAnimationsModule
			],
			declarations: [
				AppComponent,
				HomePageComponent,
				UserComponent,
				AuthComponent,
				AboutComponent,
				LoginComponent,
				RegisterComponent,
				UserDashboardComponent,
				AlertComponent
			],
		}).compileComponents();
	}));

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});
});
