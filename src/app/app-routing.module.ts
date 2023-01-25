import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guard/login.guard';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
	{
		path: 'login', component: LoginComponent, canActivate: [LoginGuard],
		children: [
			{ path: 'home', component: HomeComponent }
		]
	},
	{ path: 'create-account', component: CreateAccountComponent },
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
