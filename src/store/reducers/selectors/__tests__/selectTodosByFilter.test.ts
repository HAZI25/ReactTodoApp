import { IFilter, ITodo } from '../../../../pages/TodosPage/models';
import { selectTodosByFilter } from '../selectTodosByFilter';

describe('selectTodos', () => {
	let todos: ITodo[];

	beforeEach(() => {
		todos = [
			{ id: '1', title: 'HTML', status: 'complete', date: '123' },
			{ id: '2', title: 'CSS', status: 'complete', date: '123' },
			{ id: '3', title: 'JS', status: 'incomplete', date: '123' },
		];
	});

	test('should return all todos when filter all', () => {
		const filter: IFilter = {
			status: 'all',
		};
		const result = selectTodosByFilter({ todos, filter });
		expect(result.length).toBe(3);
	});

	test('should return completed todos when filter complete', () => {
		const filter: IFilter = {
			status: 'complete',
		};
		const result = selectTodosByFilter({ todos, filter });
		expect(result.length).toBe(2);
	});

	test('should return incomplete todos when filter incomplete', () => {
		const filter: IFilter = {
			status: 'incomplete',
		};
		const result = selectTodosByFilter({ todos, filter });
		expect(result.length).toBe(1);
	});
});
