// Write a function that accepts a number (number)
// and returns the value of the Fibonacci number
// in that position in the list
// the Fibonacci numbers follow this pattern:

// fib(0) => 0
// fib(1) => 1
// fib(n) => fib(n-1) + fib(n-2)

function fib(number) {
  var result, a, b;
  if (number < 2) {
    return number;
  } else {
    a = 0;
    b = 1;
    for(var i = 2; i <= number; i++) {
      result = a + b;
      a = b;
      b = result;
    }

    return result;
  }
}

module.exports = fib;
