import { Predicate } from '@angular/core';
import { RetroMessage, MessageType, MessageSubtype, RetroConfig } from '@app/retro/retro-state.class';
import * as _ from 'lodash';

export interface LaneDefinition {
	name: string;
	tooltip: string;
	messagePlaceholder: string;
	filter: Predicate<RetroMessage>;
	type: MessageType;
	subType?: MessageSubtype;
}

export enum LaneDefinitionType {
	START = 'START',
	STOP = 'STOP',
	CONTINUE = 'CONTINUE',
	GOOD = 'GOOD',
	IMPROVE = 'IMPROVE',
	SLOWDOWNS = 'SLOWDOWNS',
	ACHIEVEMENTS = 'ACHIEVEMENTS',
	ACTION = 'ACTION'
}

export enum LaneFilter {
	GOOD = 'GOOD',
	START = 'START',
	ACHIEVEMENT = 'ACHIEVEMENT',
	BAD = 'BAD',
	SLOWDOWN = 'SLOWDOWN',
	ACTION = 'ACTION'
}


export class LaneDefinitions {
	private static definitions: {[key in keyof typeof LaneDefinitionType]: Omit<LaneDefinition, 'filter'>} = {
		START: {
			name: 'Start doing',
			tooltip: '',
			messagePlaceholder: 'Start TBD\nhello',
			type: MessageType.bad,
			subType: MessageSubtype.start,
		},
		STOP: {
			name: 'Stop doing',
			tooltip: '',
			messagePlaceholder: 'Stop TBD',
			type: MessageType.bad,
		},
		CONTINUE: {
			name: 'Continue doing',
			tooltip: '',
			messagePlaceholder: 'Continue TBD',
			type: MessageType.good,
		},
		GOOD: {
			name: 'What was good',
			tooltip: '',
			messagePlaceholder: 'Good TBD',
			type: MessageType.good,
		},
		IMPROVE: {
			name: 'What can be improved',
			tooltip: '',
			messagePlaceholder: 'Improve TBD',
			type: MessageType.bad,
		},
		SLOWDOWNS: {
			name: 'What slows me down',
			tooltip: '',
			messagePlaceholder: 'Slowdowns TBD',
			type: MessageType.bad,
			subType: MessageSubtype.slowdown,
		},
		ACHIEVEMENTS: {
			name: 'Team achievements',
			tooltip: '',
			messagePlaceholder: 'Achievement TBD',
			type: MessageType.good,
			subType: MessageSubtype.achievement,
		},
		ACTION: {
			name: 'Action items',
			tooltip: '',
			messagePlaceholder: 'Actions TBD',
			type: MessageType.action,
		},
	};

	private static getLaneFilters(type: LaneDefinitionType, config: RetroConfig): LaneFilter[] {
		switch (type) {
			case LaneDefinitionType.START: return [LaneFilter.START];
			case LaneDefinitionType.STOP: return [LaneFilter.BAD].concat(config.slowdowns ? [] : [LaneFilter.SLOWDOWN]);
			case LaneDefinitionType.CONTINUE: return [LaneFilter.GOOD].concat(config.achievements ? [] : [LaneFilter.ACHIEVEMENT]);
			case LaneDefinitionType.GOOD: return [LaneFilter.GOOD].concat(config.achievements ? [] : [LaneFilter.ACHIEVEMENT]);
			case LaneDefinitionType.IMPROVE: return [LaneFilter.BAD, LaneFilter.START].concat(config.slowdowns ? [] : [LaneFilter.SLOWDOWN]);
			case LaneDefinitionType.SLOWDOWNS: return [LaneFilter.SLOWDOWN];
			case LaneDefinitionType.ACHIEVEMENTS: return [LaneFilter.ACHIEVEMENT];
			case LaneDefinitionType.ACTION: return [LaneFilter.ACTION]; 
		}
	}

	private static getFilter(type: LaneDefinitionType, config: RetroConfig): {filter: Predicate<RetroMessage>} {
		return {filter: LanePredicates.getPredicate(LaneDefinitions.getLaneFilters(type, config))};
	}

	static getDefinition(type: LaneDefinitionType, config: RetroConfig): LaneDefinition {
		return _.extend({}, LaneDefinitions.definitions[type], LaneDefinitions.getFilter(type, config));
	}
}

export class LanePredicates {
	private static mapping: {[key in keyof typeof LaneFilter]: [MessageType, MessageSubtype]} = {
		GOOD: [MessageType.good, null],
		START: [MessageType.bad, MessageSubtype.start],
		ACHIEVEMENT: [MessageType.good, MessageSubtype.achievement],
		BAD: [MessageType.bad, null],
		SLOWDOWN: [MessageType.bad, MessageSubtype.slowdown],
		ACTION: [MessageType.action, null],
	};

	static getPredicate(filters: LaneFilter[]): Predicate<RetroMessage> {
		let types = _.map(filters, filter => this.mapping[filter]);
		return (message) => _.some(types, typeDef => 
			this.matches(message.type, typeDef[0]) && this.matches(message.subtype, typeDef[1]));
	}

	private static matches<T>(value1: T, value2: T): boolean {
		return value1 === value2 || (!value1 && !value2);
	} 
}
