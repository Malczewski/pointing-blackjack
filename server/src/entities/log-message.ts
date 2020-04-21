export class LogMessage {
	timestamp: number;
	text: string;

	constructor(msg: string) {
		this.timestamp = new Date().getTime();
		this.text = msg;
	}
}