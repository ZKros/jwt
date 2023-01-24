export class CreateAccountModel {
	constructor(init?: Partial<CreateAccountModel>) {
		Object.assign(this, init)
	}

	nome!: string;

	telefone!: number;

	email!: string;

	senha!: string;
	
}