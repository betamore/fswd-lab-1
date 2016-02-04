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

// function fizzBuzz(count) {
  // var results = [];
  // for(var i=0; i>count; i++) {
    // var fb=i;
    // if...
    // i="Fizz"
    // if(i % 3 == 0) {
    //   results.push('Fizz');
    // }
    // else if(i % 5 == 0) {
    //   results.push('Buzz');
    // }
    // else if (i % 5 == 0) && (i % 3 == 0) {
    //   results.push('FizzBuzz');
    // }
    //
    // results.push(...)
  // }
  // if (count === 1) {
  //   results.push('FizzBuzz');
  // }
  // } else {
  //   results = ['FizzBuzz'];
  // }
  // return results;

// }

// run on jsfiddle
// var count = 1;
// var results = [];
// for (var i = 0; count > i; i++) {
//   var output = "";
//   if (i % 3 === 0)
//     output += "Fizz";
//   if (i % 5 === 0)
//     output += "Buzz";
//   output = output || i;
//   results.push(output);
// }
// console.log(results);


function fizzBuzz(count) {
  var results = [];
  for (var i = 0; count > i; i++) {
    var output = "";
    if (i % 3 === 0)
      output += "Fizz";
    if (i % 5 === 0)
      output += "Buzz";
    output = output || i;
    results.push(output);
  }
  return results;
}


module.exports = fizzBuzz;
