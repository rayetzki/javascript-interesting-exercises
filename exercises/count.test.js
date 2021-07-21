const count = require('./count');

describe('Count function', () => {

    it('Counts all keys in an object', () => {
        const a = { a: 1, b: 2 };
        expect(count(a)).toBe(2);
    });

    it('Returns 0 for functional object', () => {
        const a = function() {};
        expect(count(a)).toBe(0);
    });

    it('Counts all array items', () => {
        const c = [1, 2, 3];
        expect(count(c)).toBe(3);
    });

    // it('Counts all dynamic keys on any position correctly', () => {
    //     const d = [];
    //     d[100] = 0;
    //     expect(count(d)).toBe(1);
    // });
});