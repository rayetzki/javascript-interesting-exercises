function mapGen(fn, generator) {
    return (...args) => fn(generator(...args));
}

module.exports = mapGen;