module.exports = {
    languages: /Java(Script)?|(PHP)|C(\+\+)?/g,
    bbCode: /\[(b|url|quote)\].*?\[\/\1\]/gs,
    quotedStrings: /"(\\.|[^"\\])*"/g,
    styleTag: /<style(>|\s.*?>)/g,
}