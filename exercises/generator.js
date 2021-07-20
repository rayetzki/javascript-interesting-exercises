function sequence(start = 0, step = 1) { 
    let result = start - step;

    function* generator() {
        while(true) {
            result += step;
            yield result;
        };
    };
    
    return () => generator().next().value ;
}

module.exports = sequence;