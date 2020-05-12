var fizzbuzz = require('../index').fizzbuzz;
var fizzBuzzSingleNumber = require('../index').fizzBuzzSingleNumber;

describe('fizzbuzz', () => {

    [
        [1, '1'],
        [7, '7'],
        [3, 'fizz'],
        [6, 'fizz'],
        [5, 'buzz'],
        [10, 'buzz'],
        [15, 'fizzbuzz'],
        [30, 'fizzbuzz'],
    ].forEach((testInputParams) => {
        it('converts number ' + testInputParams[0] + ' to string "' + testInputParams[1] + '"', () => {
            expect(fizzBuzzSingleNumber(testInputParams[0])).toEqual(testInputParams[1]);
        });
    });

    it('fizzbuzz til number 15 does fizzbuzz for each number', () => {
        expect(fizzbuzz(15)).toEqual(
            '1\n' +
            '2\n' +
            'fizz\n' +
            '4\n' +
            'buzz\n' +
            'fizz\n' +
            '7\n' +
            '8\n' +
            'fizz\n' +
            'buzz\n' +
            '11\n' +
            'fizz\n' +
            '13\n' +
            '14\n' +
            'fizzbuzz'
        )
    })

});
