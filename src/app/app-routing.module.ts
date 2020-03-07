import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './views/home-page/home-page.component';
import { UserComponent } from './views/user/user.component';
import { AuthComponent } from './views/auth/auth.component';
import { AboutComponent } from './views/about/about.component';


const routes: Routes = [
	{ path: '', component: HomePageComponent },
	{ path: 'auth', component: AuthComponent },
	{
		path: 'user', component: UserComponent, children: []
	},
	{ path: 'about', component: AboutComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
