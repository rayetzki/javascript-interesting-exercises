function partial(fn, ...initialArgs) {
    return (...args) => fn(...initialArgs, ...args);
}

module.exports = partial;