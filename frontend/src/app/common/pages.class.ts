/* istanbul ignore file */
export class Pages {
	static login() { return ['/login']; }
	static home() { return ['/space']; }
	static room(id: string) { return ['/space', id]; }
}
