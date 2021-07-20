function mapGen(fn, generator) {
    function* generateValues(...args) {
        yield fn(generator(...args));
    }

    return (...args) => generateValues(...args).next().value;
}

module.exports = mapGen;