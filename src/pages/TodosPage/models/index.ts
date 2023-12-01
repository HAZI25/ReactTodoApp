import { ALL, COMPLETE, INCOMPLETE } from "../../../constants";

export interface ITodo {
	id: string;
	title: string;
	status: string;
	date: string;
}

export type IStatus = typeof ALL | typeof COMPLETE | typeof INCOMPLETE;
