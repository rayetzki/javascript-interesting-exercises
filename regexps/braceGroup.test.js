const { hexColor, allDigits, parse, macAddress } = require('./braceGroup');

test('Correctly matches hex color', () => {
    const testString = "color: #3f3; background-color: #AA00ef; and: #abcd";
    const match = testString.match(hexColor);
    const correct = ['#3f3', '#AA00ef'];
    const incorrect = ['#abcd'];
    correct.forEach(answer => expect(match.includes(answer)).toBe(true));
    incorrect.forEach(answer => expect(match.includes(answer)).toBe(false));
});

test('Correctly finds all digits', () => {
    const testString = "-1.5 0 2 -123.4.";
    const result = testString.match(allDigits);
    const answers = ['-1.5', '0', '2', '-123.4']
    answers.forEach(answer => expect(result.includes(answer)).toBe(true));
});

test('Correctly finds all digits', () => {
    const testString = "1.2 * 3.4";
    expect(parse(testString)).toStrictEqual(['1.2', '*', '3.4']);
});

test('Correctly matches MAC address', () => {
    expect('01:32:54:67:89:AB'.test(macAddress)).toBe(true);
    expect('0132546789AB'.test(macAddress)).toBe(false);
    expect('01:32:54:67:89'.test(macAddress)).toBe(false);
    expect('01:32:54:67:89:ZZ'.test(macAddress)).toBe(false);
});