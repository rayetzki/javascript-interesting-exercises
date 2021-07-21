const partialAny = require('./partialAny');

describe('Partial application of any args to fn', () => {
    const test = (a, b, c) => `a = ${a}, b = ${b}, c = ${c}`;

    it('Lets apply any arguments to test fn', () => {
        const test1_3 = partialAny(test, 1, undefined, 3);
        expect(test1_3(5)).toEqual('a = 1, b = 5, c = 3');
    });
});