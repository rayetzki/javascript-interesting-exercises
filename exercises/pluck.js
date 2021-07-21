function pluck(list, fieldName) {
    return list.map(item => item[fieldName]);
}

module.exports = pluck;