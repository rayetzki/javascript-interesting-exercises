const take = require('./take');
const generator = require('./generator');

describe('It calls generator X times', () => {
    test('It calls generator 2 times and returns results as a list', () => {
        const sequence = generator(0, 2);
        expect(take(sequence, 5)).toStrictEqual([0, 2, 4, 6, 8]);
    })
})