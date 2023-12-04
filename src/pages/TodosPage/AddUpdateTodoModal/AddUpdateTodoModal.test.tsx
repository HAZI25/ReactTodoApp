import { act, render, screen } from '@testing-library/react';
import AddUpdateTodoModal from '.';
import { useAppDispatch } from '../../../hooks/redux';
import { ITodo } from '../models';
import userEvent from '@testing-library/user-event';
import { COMPLETE } from '../../../constants';

jest.mock('../../../hooks/redux', () => ({
	useAppDispatch: jest.fn(),
}));

describe('AddUpdateTodoModal', () => {
	let setVisibility: jest.Mock;
	let dispatchMock: jest.Mock;

	beforeEach(() => {
		setVisibility = jest.fn();
		dispatchMock = jest.fn();
		(useAppDispatch as jest.Mock).mockReturnValue(dispatchMock);
	});

	test('should render with add variant', () => {
		render(<AddUpdateTodoModal setVisibility={setVisibility} variant="add" />);
		expect(screen.getByText('Add todo')).toBeInTheDocument();
	});
	test('should render with update variant', () => {
		const todo: ITodo = {
			id: '1',
			title: 'Redux',
			status: 'incomplete',
			date: '123',
		};
		render(
			<AddUpdateTodoModal
				todo={todo}
				setVisibility={setVisibility}
				variant="update"
			/>
		);
		expect(screen.getByText('Update todo')).toBeInTheDocument();
	});
	test('should close on cancel', async () => {
		render(<AddUpdateTodoModal setVisibility={setVisibility} variant="add" />);
		const cancelBtn = screen.getByTestId('cancel-btn');
		await act(() => userEvent.click(cancelBtn));
		expect(setVisibility).toHaveBeenCalledWith(false);
	});

	test('should add task', async () => {
		render(<AddUpdateTodoModal setVisibility={setVisibility} variant="add" />);
		const input = screen.getByTestId('input-elem');
		const select = screen.getByTestId('select-elem');
		const add = screen.getByTestId('addUpdate-elem');
		await act(() => userEvent.type(input, 'React'));
		await act(() => userEvent.selectOptions(select, COMPLETE));
		await act(() => userEvent.click(add));
		expect(dispatchMock).toHaveBeenCalled();
	});
});
