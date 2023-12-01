import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers/todoSlice';
import filterReducer from './reducers/filterSlice';

export const store = configureStore({
	reducer: {
		todos: todoReducer,
		filter: filterReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
