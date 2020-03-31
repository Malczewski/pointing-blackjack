export interface IStorage {
	get(key: string): string;
	put(key: string, value: string);
	clear();
}
