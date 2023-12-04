import { formatDate } from '../formatDate';

describe('formatDate', () => {
	const testCases = [
		// AM/PM cases
		{
			in: '2023-12-02T11:59:00',
			expected: '11:59 AM 2/12/2023',
		},
		{
			in: '2023-12-02T12:00:00',
			expected: '12:00 PM 2/12/2023',
		},
		{
			in: '2023-12-02T23:59:00',
			expected: '11:59 PM 2/12/2023',
		},
		{
			in: '2023-12-02T00:00:00',
			expected: '12:00 AM 2/12/2023',
		},

		// Leading 0 in day/month cases
		{
			in: '2023-02-02T11:59:00',
			expected: '11:59 AM 2/2/2023',
		},
		{
			in: '2023-10-10T12:00:00',
			expected: '12:00 PM 10/10/2023',
		},
	];

	testCases.map((test) => {
		it(`in: ${test.in} expected: ${test.expected}`, () => {
			const date = new Date(test.in);
			const result = formatDate(date);
			expect(result).toBe(test.expected);
		});
	});
});
