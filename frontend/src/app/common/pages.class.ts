export class Pages {
	static login() { return ['/login']; }
	static home() { return ['/home']; }
	static room(id: string) { return ['/room', id]; }
}
