const { languages, bbCode, quotedStrings, styleTag } = require("./alteration");

test('Correctly finds all languages', () => {
    const testString = "Java JavaScript PHP C++ C";
    const result = testString.match(languages);
    const answers = ["Java", "JavaScript", "PHP", "C++", "C"]
    answers.forEach(answer => expect(result.includes(answer)).toBe(true));
});

test('Correctly finds all BB tags', () => {
    const testString = "..[url][b]http://ya.ru[/b][/url]..";
    const result = testString.match(bbCode);
    expect(result.includes("[url][b]http://ya.ru[/b][/url]")).toBe(true);
});

test('Correctly finds all quoted strings', () => {
    const testString = ' .. "test me" .. "Скажи \\"Привет\\"!" .. "\\\\ \\"" .. ';
    const result = testString.match(quotedStrings);
    expect(result[0]).toBe('"test me"');
    expect(result[1]).toBe('"Скажи \\"Привет\\"!"');
    expect(result[2]).toBe('"\\\\ \\""');
});

test('Correctly finds tags', () => {
    const testString = '<style> <styler> <style test="...">';
    const result = testString.match(styleTag);
    expect(result.includes("<style>")).toBe(true);
    expect(result.includes('<styler>')).toBe(false);
    expect(result.includes('<style test="...">')).toBe(true);
});