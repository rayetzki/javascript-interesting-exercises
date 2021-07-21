const filter = require('./filter');

describe('Filter function', () => {
    const input = [1, 2, 3, 4, 5, 6];
    const isEven = x => x % 2 == 0;

    it('Filters a list based on a predicate', () => {
        const filtered = input.filter(isEven);
        expect(filter(input, isEven)).toStrictEqual(filtered);
    });
});