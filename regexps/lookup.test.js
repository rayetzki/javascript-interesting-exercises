const { nonNegativeInts, insertAfterBody } = require("./lookup");

test('Correctly finds all non-negative integers', () => {
    const testString = "0 12 -5 123 -18";
    const result = testString.match(nonNegativeInts);
    const correct = ['0', '12', '123'];
    const incorrect = ['-5', '-18'];
    correct.forEach(answer => expect(result.includes(answer)).toBe(true));
    incorrect.forEach(answer => expect(result.includes(answer)).toBe(false));
});

test.only('Inserts HTML after body', () => {
    const testStringBefore = `
        <html>
        <body style="height: 200px">
        ...
        </body>
        </html>
    `;

    const testStringAfter = testStringBefore.replace(insertAfterBody, `<h1>Hello</h1>`);
    
    expect(testStringAfter).toBe(`
        <html>
        <body style="height: 200px"><h1>Hello</h1>
        ...
        </body>
        </html>
    `);
});