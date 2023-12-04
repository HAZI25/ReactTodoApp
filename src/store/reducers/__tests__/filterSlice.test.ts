import { IFilter } from '../../../pages/TodosPage/models';
import { changeFilter } from '../filterSlice';
import filterReducer from '../filterSlice';

describe('filterReducer', () => {
	test('should change filter`s status', () => {
		const filter: IFilter = {
			status: 'all',
		};

		let result = filterReducer(filter, changeFilter('complete'));
		expect(result.status).toBe('complete');
		result = filterReducer(result, changeFilter('incomplete'));
		expect(result.status).toBe('incomplete');
		result = filterReducer(result, changeFilter('all'));
		expect(result.status).toBe('all');
	});
});
