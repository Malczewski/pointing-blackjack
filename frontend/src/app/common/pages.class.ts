export class Pages {
	static login() { return ['/login']; }
	static home() { return ['/galaxy']; }
	static room(id: string) { return ['/planet', id]; }
}
