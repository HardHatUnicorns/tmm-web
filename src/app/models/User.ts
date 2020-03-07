export class User {
	id: number;
	login: string;
	email: string;
	enabled: boolean;
	plainPassword: string;
	roles: [
		{
			id: number;
			name: string;
		}
	]

}