import { act, render, screen } from '@testing-library/react';
import { useAppDispatch } from '../../../hooks/redux';
import CreateAndFilter from '.';
import userEvent from '@testing-library/user-event';
import { COMPLETE } from '../../../constants';
import { changeFilter } from '../../../store/reducers/filterSlice';

jest.mock('../../../hooks/redux', () => ({
	useAppDispatch: jest.fn(),
}));

describe('CreateAndFilter', () => {
	let dispatchMock: jest.Mock;

	beforeEach(() => {
		dispatchMock = jest.fn();
		(useAppDispatch as jest.Mock).mockReturnValue(dispatchMock);
	});

	test('should open modal', async () => {
		render(<CreateAndFilter />);
		const btn = screen.getByTestId('add-elem');
		await act(() => userEvent.click(btn));
		expect(screen.getByTestId('modal-elem')).toBeInTheDocument();
	});
	test('should change filter', async () => {
		render(<CreateAndFilter />);
		const select = screen.getByTestId('select-elem');
		await act(() => userEvent.selectOptions(select, COMPLETE));
		expect(dispatchMock).toHaveBeenCalledWith(changeFilter('complete'))
	});
});
