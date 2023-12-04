import { IFilter } from '../../../../pages/TodosPage/models';
import { selectFilter } from '../selectFilter';
import { RootState } from '../../..';

describe('selectFilter', () => {
	test('should return all from state', () => {
		const filter: IFilter = {
			status: 'all',
		};
		const result = selectFilter({ filter } as RootState);
        expect(result.status).toBe('all')
	});

    test('should return complete from state', () => {
		const filter: IFilter = {
			status: 'complete',
		};
		const result = selectFilter({ filter } as RootState);
        expect(result.status).toBe('complete')
	});

    test('should return incomplete from state', () => {
		const filter: IFilter = {
			status: 'incomplete',
		};
		const result = selectFilter({ filter } as RootState);
        expect(result.status).toBe('incomplete')
	});
});
