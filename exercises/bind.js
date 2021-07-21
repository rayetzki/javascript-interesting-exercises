function bind(fn, context) {
    return (...args) => fn.call(context, ...args);
}

module.exports = bind;