import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginModel } from './model/login.model';
import { LoginService } from './service/login-.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public loginForm!: FormGroup;

	constructor(
		private fb: FormBuilder,
		private service: LoginService
	) { }

	ngOnInit(): void {
		this.loginForm = this.fb.group(new LoginModel())
	}

	onSubmit() {
		if (this.loginForm.valid) {
			this.service
		}
	}
}
