import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { AddToDoComponent } from './pages/add-to-do/add-to-do.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { LoginComponent } from './pages/login/login.component';
import { ToDoListComponent } from './pages/to-do-list/to-do-list.component';



@NgModule({
	declarations: [
		HomeComponent,
		LoginComponent,
		CreateAccountComponent,
		ToDoListComponent,
		AddToDoComponent
	],
	exports: [HomeModule]
})
export class HomeModule { }
