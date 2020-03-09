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
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';

@NgModule({
	declarations: [
		AppComponent,
		HomePageComponent,
		UserComponent,
		AuthComponent,
		AboutComponent,
		NavbarComponent,
		LoginComponent,
		RegisterComponent
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
