export enum VoteState {
	wait = "wait",
	none = "none",
}
export type Vote = number | VoteState | null;

export class PointingPlayer {
	uid: string;
	name: string;
	vote?: Vote;
	constructor(uid: string, name: string) {
		this.uid = uid;
		this.name = name;
	}
}
