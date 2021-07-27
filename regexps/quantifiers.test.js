const { htmlColors, threeDots } = require('./quantifier');

test('Correctly matches html HEX colors', () => {
    const testString = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";
    expect(testString.match(htmlColors).includes('#121212')).toBe(true);
    expect(testString.match(htmlColors).includes('#AA00ef')).toBe(true);
    expect(testString.match(htmlColors).includes('f#fddee')).toBe(false);
    expect(testString.match(htmlColors).includes('#fd2')).toBe(false);
    expect(testString.match(htmlColors).includes('#12345678')).toBe(false);
});

test('Correctly matches three dots and more', () => {
    const testString = "Привет!... Как дела?.....";
    expect(testString.match(threeDots).includes('...')).toBe(true);
    expect(testString.match(threeDots).includes('.....')).toBe(true);
});