export class User {
	id: number;
	login: string;
	email: string;
	enabled: boolean;
	roles: [
		{
			id: number;
			name: string;
		}
	]

}