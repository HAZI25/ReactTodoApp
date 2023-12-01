import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITodo } from '../../pages/TodosPage/models';
import { COMPLETE, INCOMPLETE } from '../../constants';

const initialState: ITodo[] = [];

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<ITodo>) => {
			state.push(action.payload);
		},
		toggleComplete: (state, action: PayloadAction<string>) => {
			const current = state.find((todo) => todo.id === action.payload);
			if (current) {
				current.status = current.status === COMPLETE ? INCOMPLETE : COMPLETE;
			}
		},
		updateTodo: (state, action: PayloadAction<ITodo>) => {
			const current = state.find((todo) => todo.id === action.payload.id);
			if (current) {
				current.status = action.payload.status;
				current.date = action.payload.date;
				current.title = action.payload.title;
			}
		},
		deleteTodo: (state, action: PayloadAction<string>) => {
			return state.filter((todo) => todo.id !== action.payload);
		},
	},
});

export default todoSlice.reducer;
export const { addTodo, toggleComplete, updateTodo, deleteTodo } =
	todoSlice.actions;
