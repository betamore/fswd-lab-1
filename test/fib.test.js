var fib = require('fib');

describe('fib', function() {
    it('should have an example test', function() {
        expect(true).toBe(true);
    });

    // write a couple of your own tests
    // here's an example to get you started:

    it('should be 0 for 0', function() {
        expect(fib(0)).toEqual(0);
    });

    it('should be 1 for 1', function() {
        expect(fib(1)).toEqual(1);
    });

    it('should be 1 for 2', function() {
        expect(fib(2)).toEqual(1);
    });

    it('should be 2 for 3', function() {
        expect(fib(3)).toEqual(2);
    });
    // when you are feeling confident, uncomment the following tests
    // that are based on the function description

    describe('examples from the function description', function() {
        [
            [0, 0],
            [2, 1],
            [3, 2],
            [4, 3],
            [7, 13],
            [16, 987],
            [18, 2584],
            [19, 4181],
            [20, 6765],
            [50, 12586269025]
        ].forEach(function(testValues) {
              it('fib(' + testValues[0] + ')', function() {
                  expect(fib(testValues[0])).toEqual(testValues[1]);
              });
          });
    });

    // feeling brave? try writing a test for 25 or 50

});
