// Write a function that accepts a number (number)
// and returns the value of the Fibonacci number
// in that position in the list
// the Fibonacci numbers follow this pattern:

// fib(0) => 0
// fib(1) => 1
// fib(n) => fib(n-1) + fib(n-2)

// function fib(number) {
//    if (number === 0) {
//        return 0;
//    } else if (number === 1) {
//        return 1;
//    } else {
//        return fib(number-1) + fib(number-2);
//    }    
// }

// function fib(num) {
//    var val = [];
//    for (var i = 0; i <= num; ++i) {
//        val[i] = 0;
//    }
//    if (num === 0) {
//        return 0;   
//    }  
//    if (num === 1 || num === 2) {
//        return 1;
//    }
//    else {
//        val[1] = 1;
//        val[2] = 2;
//        for (var i = 3; i <= num; ++i) {
//            val[i] = val[i -1] + val[i-2];
            // a for loop is established here to add the 2 preceding numbers 
            // (considered to be intermediate results here) 
            // in the established array via val variable
//        }
//        return val[num -1];
//    }
// }

function iterFib(num) {
    if (num === 0) {
        return 0;
    }
    else {
        var last = 1;
        var nextLast = 1;
        var result = 1;
        for (var i = 2; i < num; ++i) {
            result = last + nextLast;
            nextLast = last;
            last = result;
        }
        return result;
    }
}

module.exports = fib;
