const map = require('./map');

describe('Map functionality', () => {
    const square = x => Math.pow(x, 2);
    
    test('Happy path', () => {
        expect(map(square, [1, 2, 3, 4])).toStrictEqual([1, 4, 9, 16]);
    });

    test('Empty array', () => {
        expect(map(square, [])).toStrictEqual([]);
    });
});