var fizzBuzzSingleNumber = (aNumber) => {
    if (aNumber % 15 === 0) {
        return 'fizzbuzz'
    }
    if (aNumber % 3 === 0) {
        return 'fizz'
    }
    if (aNumber % 5 === 0) {
        return 'buzz'
    }
    return aNumber + ''
};

var fizzbuzz = (tilNumber) => {
    var result = '';
    for (var i = 1; i <= tilNumber; i++) {
        result += fizzBuzzSingleNumber(i);
        if (i != tilNumber) {
            result += '\n'
        }
    }
    return result;
};

module.exports= {
    fizzbuzz,fizzBuzzSingleNumber
}
