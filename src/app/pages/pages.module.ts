import { NgModule } from '@angular/core';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';


const component = [
	HomeComponent,
	LoginComponent,
	CreateAccountComponent,
	ToDoListComponent,
	AddToDoComponent
]

@NgModule({
	declarations: [component],
	exports: [component],
})
export class PagesModule { }
