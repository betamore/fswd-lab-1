// Write a function that accepts a number (count)
// and returns an array of length count
// where each item in the array follows this pattern:
// if its index (starting from zero) is divisible by three: 'Fizz'
// if its index (again, starting from zero) is divisible by five: 'Buzz'
// if its index is divisible by both three *and* five: 'FizzBuzz'
// otherwise, just the value of the index

// for example:
// fizzBuzz(0) => []
// fizzBuzz(2) => ['FizzBuzz', 1]
// fizzBuzz(7) => ['FizzBuzz', 1, 2, 'Fizz', 4, 'Buzz', 'Fizz']

function fizzBuzz(number) {
    var result = [];
    for(var i = 0; i < number; i++) {
        if (( i % 15 ) == 0 ) {
            result.push('FizzBuzz');
        } else if (( i % 5 ) == 0) {
            result.push('Buzz');
        } else if (( i % 3 ) == 0) {
            result.push('Fizz');
        } else {
            result.push(i);
        }
    }
    return result;
}

module.exports = fizzBuzz;
