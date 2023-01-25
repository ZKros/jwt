

export class LoginModel {
	constructor(init?: Partial<LoginModel>) {
		Object.assign(this, init);
	}

	email!: string;

	senha!: string;
	
}