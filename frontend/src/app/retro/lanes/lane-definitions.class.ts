import { Predicate } from '@angular/core';
import { RetroMessage, MessageType, MessageSubtype, RetroConfig } from '@app/retro/retro-state.class';
import * as _ from 'lodash';

export interface LaneDefinition {
	name: string;
	inputLabel: string;
	messagePlaceholder: string;
	filters: LaneFilter[];
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
	private static definitions: {[key in keyof typeof LaneDefinitionType]: Omit<LaneDefinition, 'filters'>} = {
		START: {
			name: 'Start doing',
			inputLabel: 'Start doing',
			messagePlaceholder: 'Start TBD\nhello',
			type: MessageType.evil,
			subType: MessageSubtype.start,
		},
		STOP: {
			name: 'Stop doing',
			inputLabel: 'Stop doing',
			messagePlaceholder: 'Stop TBD',
			type: MessageType.evil,
		},
		CONTINUE: {
			name: 'Continue doing',
			inputLabel: 'Continue doing',
			messagePlaceholder: 'Continue TBD',
			type: MessageType.good,
		},
		GOOD: {
			name: 'What was good',
			inputLabel: 'What was good',
			messagePlaceholder: 'Good TBD',
			type: MessageType.good,
		},
		IMPROVE: {
			name: 'What can be improved',
			inputLabel: 'What can be improved',
			messagePlaceholder: 'Improve TBD',
			type: MessageType.evil,
		},
		SLOWDOWNS: {
			name: 'What slows me down',
			inputLabel: 'What slows me down',
			messagePlaceholder: 'Slowdowns TBD',
			type: MessageType.evil,
			subType: MessageSubtype.slowdown,
		},
		ACHIEVEMENTS: {
			name: 'Team achievements',
			inputLabel: 'Team achievements',
			messagePlaceholder: 'Achievement TBD',
			type: MessageType.good,
			subType: MessageSubtype.achievement,
		},
		ACTION: {
			name: 'Action items',
			inputLabel: 'Action items',
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

	private static getFilter(type: LaneDefinitionType, config: RetroConfig): {filters: LaneFilter[]} {
		return {filters: LaneDefinitions.getLaneFilters(type, config)};
	}

	static getDefinition(type: LaneDefinitionType, config: RetroConfig): LaneDefinition {
		return _.extend({}, LaneDefinitions.definitions[type], LaneDefinitions.getFilter(type, config));
	}
}

export class LanePredicates {
	private static mapping: {[key in keyof typeof LaneFilter]: [MessageType, MessageSubtype]} = {
		GOOD: [MessageType.good, null],
		START: [MessageType.evil, MessageSubtype.start],
		ACHIEVEMENT: [MessageType.good, MessageSubtype.achievement],
		BAD: [MessageType.evil, null],
		SLOWDOWN: [MessageType.evil, MessageSubtype.slowdown],
		ACTION: [MessageType.action, null],
	};

	static matchFilters(message: RetroMessage, filters: LaneFilter[]): boolean {
		return _.some(filters, filter => {
			let typeDef = this.mapping[filter];
			return this.matches(message.type, typeDef[0]) && this.matches(message.subtype, typeDef[1]);
		});
	}

	private static matches<T>(value1: T, value2: T): boolean {
		return value1 === value2 || (!value1 && !value2);
	} 
}
