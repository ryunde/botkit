var assert = require('assert');
var bothmath = require('../botmath.js');

describe('botmath', function() {
  describe('sum', function () {
    it('should return sum of 2 values', function () {
      assert.equal(-2, bothmath.sum(-2, 0));
	  assert.equal(1, bothmath.sum(-1, 2));
	  assert.equal(6.5, bothmath.sum(3.5, 3));
	  assert.equal(1337, bothmath.sum(1338.2, -1.2));
    })
	it('should return NaN if both values are not numeric', function () {
		assert.ok(isNaN(bothmath.sum(1335, 'a')));
	});
  });
});

describe('botmath', function() {
  describe('isFibonacci', function () {
    it('should return 1 if number is fibonacci', function () {
      assert.equal(1, bothmath.isFibonacci(144));
      assert.equal(1, bothmath.isFibonacci(13));
    })
	it('should return NaN if value is string or not a fibonacci number', function () {
		assert.ok(isNaN(bothmath.isFibonacci('a')));
                assert.ok(isNaN(bothmath.isFibonacci(14)));
                assert.ok(isNaN(bothmath.isFibonacci(-1)));
	});
  });
});
