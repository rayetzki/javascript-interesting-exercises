// TODO Write Regex

function parse(expression) {
    const regex = /ваш шаблон/g;
    const { first, operator, second } = String(expression).match(regex).groups;
    return [first, operator, second];
}

module.exports = {
    hexColor: /ваш шаблон/g,
    allDigits: /ваш шаблон/g,
    parse,
    macAddress: /ваш шаблон/g,
}