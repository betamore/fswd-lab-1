var fib = require('../lib/fib');

require('chai').should();

describe('fib', function() {
    it('should have an example test', function() {
        true.should.equal(true);
    });

    // write a couple of your own tests
    // here's an example to get you started:

    it('should be 0 for 0', function() {
        fib(0).should.equal(0);
    });

    it('should be 1 for 1', function() {
        fib(1).should.equal(1);
    });

    it('should be 1 for 2', function() {
        fib(2).should.equal(1);
    });

    // when you are feeling confident, uncomment the following tests
    // that are based on the function description

    describe('examples from the function description', function() {
        [
            [0, 0],
            [2, 1],
            [7, 13],
            [16, 987]
        ].forEach(function(testValues) {
              it('fib(' + testValues[0] + ')', function() {
                  fib(testValues[0]).should.equal(testValues[1]);
              });
          });
    });

    // feeling brave? try writing a test for 25 or 50

    it('should be 75025 for 25', function() {
        fib(25).should.equal(75025);
    });

    it('should be 832040 for 30', function() {
        fib(30).should.equal(832040);
    });

});
