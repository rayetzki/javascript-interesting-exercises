function filter(arr, fn) {
    if (arr.length === 0) return [];
    const result = [];
    arr.forEach((item) => {
        if (fn(item) === true) result.push(item);
    });
    return result;
};

module.exports = filter;