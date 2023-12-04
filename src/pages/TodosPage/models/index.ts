import { ALL, COMPLETE, INCOMPLETE } from '../../../constants';

export type ITodoStatus = typeof COMPLETE | typeof INCOMPLETE;

export interface ITodo {
	id: string;
	title: string;
	status: ITodoStatus;
	date: string;
}

export interface IFilter {
	status: IStatus;
}

export type IStatus = typeof ALL | typeof COMPLETE | typeof INCOMPLETE;
