
export enum VoteState {
	wait = 'wait',
	none = 'none'
}
export interface Player {
	uid: string;
	name: string;
	vote?: Vote;
}
export type Vote = number | VoteState | null;

export class RoomState {
	id: string;
	name: string;
	players: Player[];
	observers: Player[];
	log: string[];
}
