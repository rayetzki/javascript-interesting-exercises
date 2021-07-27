const { languages, bbCode, quotedStrings, styleTag } = require("./alteration");

test('Correctly finds all languages', () => {
    const testString = "Java JavaScript PHP C++ C";
    expect(testString.match(languages).includes("Java JavaScript PHP C++ C")).toBe(true);
});

test('Correctly finds all [b]-[/b] tags', () => {
    const testString = "..[url][b]http://ya.ru[/b][/url]..";
    expect(testString.match(bbCode).includes("[url][b]http://ya.ru[/b][/url]")).toBe(true);
});

test('Correctly finds all quoted strings', () => {
    const testString = ' .. "test me" .. "Скажи \\"Привет\\"!" .. "\\\\ \\"" .. ';
    expect(testString.match(quotedStrings).includes('test me')).toBe(true);
    expect(testString.match(quotedStrings).includes('Скажи \\"Привет\\"!')).toBe(true);
    expect(testString.match(quotedStrings).includes('"\\"')).toBe(true);
    expect(testString.match(quotedStrings).includes('"\\ \""')).toBe(true);
});

test('Correctly finds tags', () => {
    const testString = '<style> <styler> <style test="...">';
    expect(testString.match(styleTag).includes("<style>")).toBe(true);
    expect(testString.match(styleTag).includes('<style test="..."')).toBe(true);
});