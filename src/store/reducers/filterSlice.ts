import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStatus } from '../../pages/TodosPage/models';

interface IFilter {
	status: IStatus;
}

const initialState: IFilter = {
	status: 'all',
};

const filterSlice = createSlice({
	name: 'todoFilter',
	initialState,
	reducers: {
		changeFilter: (state, action: PayloadAction<IStatus>) => {
			state.status = action.payload;
		},
	},
});

export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;
