import { createSelector } from '@reduxjs/toolkit';
import { selectTodos } from './selectTodos';
import { selectFilters } from './selectFilters';
import { ALL } from '../../../constants';

export const selectTodosByFilter = createSelector(
	[selectTodos, selectFilters],
	(todos, filter) => {
		return filter.status === ALL
			? todos
			: todos.filter((todo) => todo.status === filter.status);
	}
);
