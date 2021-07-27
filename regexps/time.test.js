const time = require('./time');

test('Correctly matches time', () => {
    const testString = 'Завтрак в 09:00 в комнате 123:456.';
    expect(testString.match(time).includes('09:00')).toBe(true);
    expect(testString.match(time).includes('123:456')).toBe(false);
});