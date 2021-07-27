const { htmlComments, htmlTags } = require('./greedyQuantifiers');

test('Correctly matches HTML comments', () => {
    const testString = `... <!-- My -- comment 
    test --> ..  <!----> ..
    `;
    const result = testString.match(htmlComments);
    expect(result.includes('<!-- My -- comment \n    test -->')).toBe(true);
    expect(result.includes('<!---->')).toBe(true);
});

test('Correctly matches HTML tags', () => {
    const testString = '<> <a href="/"> <input type="radio" checked> <b>';
    const result = testString.match(htmlTags);
    expect(result.includes('<a href="/">')).toBe(true);
    expect(result.includes('<>')).toBe(false);
    expect(result.includes('<input type="radio" checked>')).toBe(true);
    expect(result.includes('<b>')).toBe(true);
});