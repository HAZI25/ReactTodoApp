import { createSelector } from '@reduxjs/toolkit';
import { selectTodos } from './selectTodos';
import { selectFilter } from './selectFilter';
import { ALL } from '../../../constants';

export const selectTodosByFilter = createSelector(
	[selectTodos, selectFilter],
	(todos, filter) => {
		return filter.status === ALL
			? todos
			: todos.filter((todo) => todo.status === filter.status);
	}
);
