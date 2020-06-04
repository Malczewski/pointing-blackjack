import { Predicate } from '@angular/core';
import { RetroMessage, MessageType, MessageSubtype, RetroConfig, RetroType } from '@app/retro/retro-state.class';
import * as _ from 'lodash';

export interface LaneDefinition {
	name: string;
	tooltip: string;
	messagePlaceholder: string;
	filter: Predicate<RetroMessage>;
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
	CONTINUE = 'CONTINUE',
	START = 'START',
	ACHIEVEMENT = 'ACHIEVEMENT',
	STOP = 'STOP',
	SLOWDOWN = 'SLOWDOWN',
	ACTION = 'ACTION'
}


export class LaneDefinitions {
	private static definitions: {[key in keyof typeof LaneDefinitionType]: Omit<LaneDefinition, 'filter'>} = {
		START: {
			name: 'Start doing',
			tooltip: '',
			messagePlaceholder: 'Start TBD'
		},
		STOP: {
			name: 'Stop doing',
			tooltip: '',
			messagePlaceholder: 'Stop TBD'
		},
		CONTINUE: {
			name: 'Continue doing',
			tooltip: '',
			messagePlaceholder: 'Continue TBD'
		},
		GOOD: {
			name: 'What was good',
			tooltip: '',
			messagePlaceholder: 'Good TBD'
		},
		IMPROVE: {
			name: 'What can be improved',
			tooltip: '',
			messagePlaceholder: 'Improve TBD'
		},
		SLOWDOWNS: {
			name: 'What slows me down',
			tooltip: '',
			messagePlaceholder: 'Slowdowns TBD'
		},
		ACHIEVEMENTS: {
			name: 'Team achievements',
			tooltip: '',
			messagePlaceholder: 'Achievement TBD'
		},
		ACTION: {
			name: 'Action items',
			tooltip: '',
			messagePlaceholder: 'Actions TBD'
		},
	};

	private static getLaneFilters(type: LaneDefinitionType, config: RetroConfig): LaneFilter[] {
		switch (type) {
			case LaneDefinitionType.START: return [LaneFilter.START];
			case LaneDefinitionType.STOP: return [LaneFilter.STOP].concat(config.slowdowns ? [] : [LaneFilter.SLOWDOWN]);
			case LaneDefinitionType.CONTINUE: return [LaneFilter.CONTINUE].concat(config.achievements ? [] : [LaneFilter.ACHIEVEMENT]);
			case LaneDefinitionType.GOOD: return [LaneFilter.CONTINUE, LaneFilter.START].concat(config.achievements ? [] : [LaneFilter.ACHIEVEMENT]);
			case LaneDefinitionType.IMPROVE: return [LaneFilter.STOP].concat(config.slowdowns ? [] : [LaneFilter.SLOWDOWN]);
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
		CONTINUE: [MessageType.good, null],
		START: [MessageType.good, MessageSubtype.start],
		ACHIEVEMENT: [MessageType.good, MessageSubtype.achievement],
		STOP: [MessageType.bad, null],
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
