import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import { Provider } from 'react-redux';
import { store } from '../store';

describe('AppRouter', () => {
	test('should open todos page as default', () => {
		render(
			<MemoryRouter>
				<Provider store={store}>
					<AppRouter />
				</Provider>
			</MemoryRouter>
		);

		expect(screen.getByTestId('todos_page')).toBeInTheDocument();
	});

	test('should open about page', () => {
		render(
			<MemoryRouter initialEntries={['/about']}>
				<Provider store={store}>
					<AppRouter />
				</Provider>
			</MemoryRouter>
		);

		expect(screen.getByTestId('about_page')).toBeInTheDocument();
	});

	test('should open not-found page', () => {
		render(
			<MemoryRouter initialEntries={['/wqeferwv']}>
				<Provider store={store}>
					<AppRouter />
				</Provider>
			</MemoryRouter>
		);

		expect(screen.getByTestId('not_found_page')).toBeInTheDocument();
	});
});
