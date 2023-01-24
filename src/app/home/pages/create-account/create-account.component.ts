import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreateAccountModel } from './model/create-account.model';
import { CreateAccountService } from './service/create-account.service';

@Component({
	selector: 'app-create-account',
	templateUrl: './create-account.component.html',
	styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
	public createAccountForm!: FormGroup

	constructor(
		private fb: FormBuilder,
		private service: CreateAccountService
	) { }

	ngOnInit(): void {
		this.createAccountForm = this.fb.group(new CreateAccountModel)
	}

	onSubmit() {
		if (this.createAccountForm.valid) {
			this.service
		}
	}
}
