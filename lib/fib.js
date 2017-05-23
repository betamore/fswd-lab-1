// Write a function that accepts a number (number)
// and returns the value of the Fibonacci number
// in that position in the list
// the Fibonacci numbers follow this pattern:

// fib(0) => 0
// fib(1) => 1
// fib(n) => fib(n-1) + fib(n-2)

function fib(number) {
    // console.log('Calculating fib(' + number + ')');
    if (number === 0) {
        return 0;
    }

    if (number === 1) {
        return 1;
    }

    return 0;

    // return fib(number - 1) + fib(number - 2);
}

module.exports = fib;
