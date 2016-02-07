var fizzBuzz = require('../lib/fizzbuzz');

require('chai').should();

describe('fizzBuzz', function() {
    it('should have an example test', function() {
        true.should.equal(true);
    });

    // write a couple of your own tests
    // here's an example to get you started:
    
    it('should be ["FizzBuzz"] for 0', function() {
        fizzBuzz(0).should.deep.equal(["FizzBuzz"]);
    });
    
    it("should be ['FizzBuzz', 1] for 2", function() {
        fizzBuzz(2).should.deep.equal(['FizzBuzz', 1])
    });
    
    it("should be ['FizzBuzz', 1, 2, 'Fizz', 4, 'Buzz', 'Fizz'] for 7", function() {
        fizzBuzz(7).should.deep.equal(['FizzBuzz', 1, 2, 'Fizz', 4, 'Buzz', 'Fizz'])
    });
    
    it("should be ['FizzBuzz', 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz'] for 16", function() {
        fizzBuzz(16).should.deep.equal(['FizzBuzz', 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz'])
    });

    // when you are feeling confident, uncomment the following tests
    // that are based on the function description
    
    // describe('examples from the function description', function() {
    //     [
    //         [0, []],
    //         [2, ['FizzBuzz', 1]],
    //         [7, ['FizzBuzz', 1, 2, 'Fizz', 4, 'Buzz', 'Fizz']],
    //         [16, ['FizzBuzz', 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']]
    //     ].forEach(function(testValues) {
    //           it('fizzBuzz(' + testValues[0] + ')', function() {
    //               fizzBuzz(testValues[0]).should.deep.equal(testValues[1]);
    //           });
    //       });
    // });
       
});
