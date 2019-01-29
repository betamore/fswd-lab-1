var fizzBuzz = require('fizzbuzz');

describe('fizzBuzz', function() {
    it('should have an example test', function() {
        expect(true).toBe(true);
    });

    // write a couple of your own tests
    // here's an example to get you started:

    it('should be [] for 0', function() {
        expect(fizzBuzz(0)).toEqual([]);
    });

    it('should be ["FizzBuzz"] for 1', function() {
        expect(fizzBuzz(1)).toEqual(["FizzBuzz"]);
    });

    it('should be ["FizzBuzz", 1] for 2', function() {
        expect(fizzBuzz(2)).toEqual(['FizzBuzz', 1]);
    });

    it('should be ["FizzBuzz", 1, 2] for 3', function() {
        expect(fizzBuzz(3)).toEqual(['FizzBuzz', 1, 2]);
    });

    it('should be ["FizzBuzz", 1, 2, "Fizz"] for 4', function() {
        expect(fizzBuzz(4)).toEqual(['FizzBuzz', 1, 2, 'Fizz']);
    });

    // when you are feeling confident, uncomment the following tests
    // that are based on the function description

    describe('examples from the function description', function() {
        [
            [0, []],
            [2, ['FizzBuzz', 1]],
            [7, ['FizzBuzz', 1, 2, 'Fizz', 4, 'Buzz', 'Fizz']],
            [16, ['FizzBuzz', 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']]
        ].forEach(function(testValues) {
              it('fizzBuzz(' + testValues[0] + ')', function() {
                  expect(fizzBuzz(testValues[0])).toEqual(testValues[1]);
              });
          });
    });

});
