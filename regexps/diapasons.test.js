const timeDiapason = require('./diapasons');

test('Correctly matches time', () => {
    const testString = "Завтрак в 09:00. Ужин в 21-30";
    expect(testString.match(timeDiapason).includes('09:00')).toBe(true);
    expect(testString.match(timeDiapason).includes('21-30')).toBe(true);
});