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

    // when you are feeling confident, uncomment the following tests
    // that are based on the function description

    describe('examples from the function description', function() {
        [
            [0, 0],
            [2, 1],
            [7, 13],
            [16, 987],
            [20, 6765],
            [25, 75025],
            [30, 832040],
            [35, 9227465],
            // [40, 102334155],
            // [45, 1134903170]
            // [50, 99999999999]
        ].forEach(function(testValues) {
              it('fib(' + testValues[0] + ')', function() {
                  expect(fib(testValues[0])).toEqual(testValues[1]);
              });
          });
    });

    // feeling brave? try writing a test for 25 or 50

});
