const partial = require('./partial');

describe('Partial application of fn', () => {
    const add = (a, b) => a + b;
    const mult = (a, b, c, d) => a * b * c * d;
    
    it('Adds partially', () => {
        const add5 = partial(add, 5); // a => a + 5;
        expect(add5(2)).toBe(7);
        expect(add5(10)).toBe(15);
    });

    it('Multiplies partially', () => {
        const mult23 = partial(mult, 2, 3);
        expect(mult23(4, 5)).toBe(120);
        expect(mult23(1, 1)).toBe(6);
    });
});