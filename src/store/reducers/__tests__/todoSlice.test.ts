import { ITodo } from '../../../pages/TodosPage/models';
import { addTodo, deleteTodo, toggleComplete, updateTodo } from '../todoSlice';
import todoReducer from '../todoSlice';

describe('todoReducer', () => {
	let todos: ITodo[];

	beforeEach(() => {
		todos = [
			{
				id: '1',
				title: 'HTML',
				date: '123',
				status: 'incomplete',
			},
			{
				id: '2',
				title: 'CSS',
				date: '123',
				status: 'incomplete',
			},
			{
				id: '3',
				title: 'JS',
				date: '123',
				status: 'incomplete',
			},
		];
	});

	test('should add todo', () => {
		const newTodo: ITodo = {
			id: '4',
			title: 'React',
			date: '123',
			status: 'incomplete',
		};

		const res = todoReducer(todos, addTodo(newTodo));

		expect(res.length).toBe(4);
		expect(res[3]).toEqual(newTodo);
	});

	test('should toggle todo', () => {
		let res = todoReducer(todos, toggleComplete('2'));
		expect(res[1].status).toBe('complete');
		res = todoReducer(res, toggleComplete('2'));
		expect(res[1].status).toBe('incomplete');
	});

	test('should update todo', () => {
		const updatedTodo: ITodo = {
			id: '2',
			title: 'SCSS',
			date: '123',
			status: 'complete',
		};

		const res = todoReducer(todos, updateTodo(updatedTodo));
		expect(res[1]).toEqual(updatedTodo);
	});

	test('should delte todo', () => {
		const res = todoReducer(todos, deleteTodo('1'));
		expect(res.length).toBe(2);
		expect(res[0].id).toBe('2');
	});
});
