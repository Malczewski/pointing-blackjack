export interface RetroMessage {
	uid: string;
	type: string;
	subtype?: string;
	text: string;
	opened?: boolean;
	authorUid: string;
	authorName: string;
	likes?: string[];
}