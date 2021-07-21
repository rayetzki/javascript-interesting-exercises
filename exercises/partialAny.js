function partialAny(fn, ...args) {
    return (...rest) => fn(...(args.includes(undefined) ? args.map(arg => {
        if (arg === undefined) return rest.shift();
        else return arg;
    }): [...args, ...rest]));  
};

module.exports = partialAny;