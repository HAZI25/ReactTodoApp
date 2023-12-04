import { render, screen } from '@testing-library/react';
import { INCOMPLETE } from '../../../constants';
import { useAppSelector } from '../../../hooks/redux';
import TodoList from '.';

jest.mock('../../../hooks/redux');

describe('TodoList', () => {
	beforeEach(() => {
		(useAppSelector as jest.Mock).mockReturnValue([
			{ id: '1', title: 'HTML', status: INCOMPLETE, date: '123' },
			{ id: '2', title: 'CSS', status: INCOMPLETE, date: '123' },
			{ id: '3', title: 'JS', status: INCOMPLETE, date: '123' },
		]);
	});

	test('should render list', () => {
		render(<TodoList />);
		expect(screen.getByTestId('list-elem').children).toHaveLength(3);
	});
});
