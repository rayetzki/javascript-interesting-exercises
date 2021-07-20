function take(fn, count) {
    const result = [];
    do {
        result.push(fn());
    } while(count > result.length);
    return result;
}

module.exports = take;