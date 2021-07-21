const pluck = require('./pluck');

describe('Pluck function test', () => {
    const characters = [
        { 'name': 'barney', 'age': 36 },
        { 'name': 'fred', 'age': 40 }
    ];

    it('Returns a list of all values under `name` key', () => {
        expect(pluck(characters, 'name')).toStrictEqual(['barney', 'fred']);
    });
});