import { act, render, screen } from '@testing-library/react';
import TodoItem from '.';
import { useAppDispatch } from '../../../hooks/redux';
import { ITodo } from '../models';
import userEvent from '@testing-library/user-event';
import { deleteTodo, toggleComplete } from '../../../store/reducers/todoSlice';

jest.mock('../../../hooks/redux', () => ({
	useAppDispatch: jest.fn(),
}));
describe('TodoItem', () => {
	let dispatchMock: jest.Mock;
	let todo: ITodo;

	beforeEach(() => {
		dispatchMock = jest.fn();
		(useAppDispatch as jest.Mock).mockReturnValue(dispatchMock);
		todo = {
			id: '1',
			title: 'React',
			status: 'incomplete',
			date: '123',
		};
	});

	test('should render todo', () => {
		render(<TodoItem todo={todo} />);
		expect(screen.getByTestId('title-elem')).toContainHTML('React');
		expect(screen.getByTestId('checkbox-elem')).not.toBeChecked();
		expect(screen.getByTestId('date-elem')).toContainHTML('123');
	});

	test('should toggle completeness', async () => {
		render(<TodoItem todo={todo} />);
		const checkbox = screen.getByTestId('checkbox-elem');
		await act(() => userEvent.click(checkbox));
		expect(dispatchMock).toHaveBeenCalledWith(toggleComplete('1'));
	});

	test('should open modal', async () => {
		render(<TodoItem todo={todo} />);
		await act(() => userEvent.click(screen.getByTestId('edit-elem')));
		expect(screen.getByTestId('modal-elem')).toBeInTheDocument();
	});
	test('should delete task', async () => {
		render(<TodoItem todo={todo} />);
		await act(() => userEvent.click(screen.getByTestId('delete-elem')));
		expect(dispatchMock).toHaveBeenCalledWith(deleteTodo('1'));
	});
});
