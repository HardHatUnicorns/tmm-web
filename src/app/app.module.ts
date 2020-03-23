import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { UserComponent } from './views/user/user.component';
import { AuthComponent } from './views/auth/auth.component';
import { AboutComponent } from './views/about/about.component';
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { UserDashboardComponent } from './views/user/user-dashboard/user-dashboard.component';
import { AlertComponent } from './components/alert/alert.component';
import { LogoutComponent } from './views/auth/logout/logout.component';

@NgModule({
	declarations: [
		AppComponent,
		HomePageComponent,
		UserComponent,
		AuthComponent,
		AboutComponent,
		LoginComponent,
		RegisterComponent,
		UserDashboardComponent,
		AlertComponent,
		LogoutComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
