function map(fn, array) {
    return array.reduce((acc, item) => acc.concat(fn(item)), []);
}

module.exports = map;