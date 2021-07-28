function parse(expression) {
    const regex = /(?<first>-?\d+(\.\d+)?)\s+(?<operator>[-+*/])\s+(?<second>-?\d+(\.\d+)?)/;
    const { first, operator, second } = expression.trim().match(regex).groups;
    return [first, operator, second];
}

module.exports = {
    hexColor: /#([a-f0-9]{3}){1,2}\b/gi,
    allDigits: /-?\d+(\.\d+)?/g,
    parse,
    macAddress: /^[a-f0-9]{2}(:[a-f0-9]{2}){5}$/i,
}