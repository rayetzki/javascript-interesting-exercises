const mapGen = require('./mapGen');
const sequence = require('./generator');

describe('Map generator functionality', () => {
    const square = x => Math.pow(x, 2);
    const add = (a, b) => a + b;

    test('Happy path', () => {
        const generator = sequence(1, 1);
        const squareGen = mapGen(square, generator);
        
        [1, 4, 9, 16].forEach(index => {
            expect(squareGen()).toEqual(index);
        });
    });

    test('Custom function', () => {
        const squareAdd = mapGen(square, add);
        expect(squareAdd(2, 3)).toEqual(25);
        expect(squareAdd(3, 4)).toEqual(49);
        expect(squareAdd(5, 7)).toEqual(144);
    });
});