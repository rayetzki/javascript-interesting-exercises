const sequence = require("./generator");

describe('First sequence', () => {
    const generator = sequence(7, 3);

    test('First call', () => {
        expect(generator()).toBe(10);
    });

    test('Second call', () => {
        expect(generator()).toBe(13);
    });
});

describe('Second sequence', () => {
    const generator = sequence(7, 1);

    test('First call', () => {
        expect(generator()).toBe(8);
    });

    test('Second call', () => {
        expect(generator()).toBe(9);
    });
});

describe('Third sequence', () => {
    const generator = sequence(7);

    test('First call', () => {
        expect(generator()).toBe(8);
    });

    test('Second call', () => {
        expect(generator()).toBe(9);
    });

    test('Third call', () => {
        expect(generator()).toBe(10);
    });
});