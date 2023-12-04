import { RootState } from '../../..';
import { ITodo } from '../../../../pages/TodosPage/models';
import { selectTodos } from '../selectTodos';

describe('selectTodos', () => {
	test('should return todos from state', () => {
		const todos: ITodo[] = [
			{ id: '1', title: 'HTML', status: 'complete', date: '123' },
			{ id: '2', title: 'CSS', status: 'complete', date: '123' },
			{ id: '3', title: 'JS', status: 'incomplete', date: '123' },
		];
		const result = selectTodos({ todos } as RootState);
		expect(result).toEqual(todos);
	});
});
