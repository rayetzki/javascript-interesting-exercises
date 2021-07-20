function sequence(start = 0, step = 1) {  
    let result = start;
    
    function* generator() {
        while(true) {
            result += step;
            yield result;
        }
    };
     
    return function() {
        return generator().next().value;
    };
}

module.exports = sequence;