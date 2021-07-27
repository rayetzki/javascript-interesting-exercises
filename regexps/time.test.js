const time = require('./time');

test('Correctly matches time', () => {
    const testString = 'Завтрак в 09:00 в комнате 123:456.';
    const { hours, minutes } = testString.match(time).groups;
    expect(hours).toBe('09');
    expect(minutes).toBe('00');
});