import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './views/home-page/home-page.component';
import { UserComponent } from './views/user/user.component';
import { AuthComponent } from './views/auth/auth.component';
import { AboutComponent } from './views/about/about.component';
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { UserDashboardComponent } from './views/user/user-dashboard/user-dashboard.component';
import { IsAuthGuard } from './guards/is-auth.guard';
import { LogoutComponent } from './views/auth/logout/logout.component';

const routes: Routes = [
	{ path: '', component: HomePageComponent },
	{
		path: 'auth', component: AuthComponent, children: [
			{ path: 'login', component: LoginComponent },
			{ path: 'register', component: RegisterComponent },
			{ path: 'logout', component: LogoutComponent }
		]
	},
	{
		path: 'user', component: UserComponent, children: [
			{ path: 'dashboard', component: UserDashboardComponent, canActivate: [IsAuthGuard] }
		]
	},
	{ path: 'about', component: AboutComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
