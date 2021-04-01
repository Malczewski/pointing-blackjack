import { UserState } from '@app/common/user-state.service';

export enum VoteState {
	none = 'none'
}
export interface Player extends UserState {
	uid: string;
	name: string;
	vote?: Vote;
}
export enum PlayerRole {
	player = 'player',
	spectator = 'spectator'
}

export type Vote = number | VoteState | null;

export class RoomState {
	id: string;
	name: string;
	players: Player[];
	spectators: Player[];
	log: {timestamp: number, text: string}[];
	lastChangeUid?: string;
}
