const sequence = require("./generator");

describe('First sequence', () => {
    const generator = sequence(10, 3);

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
        expect(generator()).toBe(7);
    });

    test('Second call', () => {
        expect(generator()).toBe(8);
    });
});