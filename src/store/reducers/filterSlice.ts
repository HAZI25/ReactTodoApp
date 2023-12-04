import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilter, IStatus } from '../../pages/TodosPage/models';

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
