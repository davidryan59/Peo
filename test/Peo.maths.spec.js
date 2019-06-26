/* eslint-disable func-names */
/* eslint-disable no-undefined */

var assert = require('assert');

var testIndex = require('./_test_index');
var Peo = testIndex.Peo;


describe('Peo maths comparison functions', function () {
  it('cover an edge case with zero exponent, not normally reached', function () {
    var peo = new Peo(1003, 1004);
    peo.p = Object.assign({1: 0}, peo.p);
    // A zero exponent means need to look at next exponent inside is1
    assert(!peo.is1());
  });

  it('test unary comparison operators on peo less than 1', function () {
    var peo = new Peo(1003, 1004);
    assert(!peo.is1());
    assert(peo.isNot1());
    assert(peo.lessThan1());
    assert(peo.lessThanOrEqualTo1());
    assert(!peo.greaterThan1());
    assert(!peo.greaterThanOrEqualTo1());
  });
  it('test unary comparison operators on peo equal to 1', function () {
    var peo = new Peo(1004, 1004);
    assert(peo.is1());
    assert(!peo.isNot1());
    assert(!peo.lessThan1());
    assert(peo.lessThanOrEqualTo1());
    assert(!peo.greaterThan1());
    assert(peo.greaterThanOrEqualTo1());
  });
  it('test unary comparison operators on peo greater than 1', function () {
    var peo = new Peo(123456789, 1);
    assert(!peo.is1());
    assert(peo.isNot1());
    assert(!peo.lessThan1());
    assert(!peo.lessThanOrEqualTo1());
    assert(peo.greaterThan1());
    assert(peo.greaterThanOrEqualTo1());
  });

  it('test binary comparison operators on peo1 less than peo2', function () {
    var peo1 = new Peo(3, 5);
    var peo2 = new Peo(60, 7);
    assert(!peo1.equals(peo2));
    assert(peo1.notEquals(peo2));
    assert(peo1.lessThan(peo2));
    assert(peo1.lessThanOrEqualTo(peo2));
    assert(!peo1.greaterThan(peo2));
    assert(!peo1.greaterThanOrEqualTo(peo2));
  });
  it('test binary comparison operators on peo1 equal to peo2', function () {
    var peo1 = new Peo(4, 6);
    var peo2 = new Peo(2000, 3000);
    assert(peo1.equals(peo2));
    assert(!peo1.notEquals(peo2));
    assert(!peo1.lessThan(peo2));
    assert(peo1.lessThanOrEqualTo(peo2));
    assert(!peo1.greaterThan(peo2));
    assert(peo1.greaterThanOrEqualTo(peo2));
  });
  it('test binary comparison operators on peo1 greater than peo2', function () {
    var peo1 = new Peo(3, 5);
    var peo2 = new Peo(2, 4);
    assert(!peo1.equals(peo2));
    assert(peo1.notEquals(peo2));
    assert(!peo1.lessThan(peo2));
    assert(!peo1.lessThanOrEqualTo(peo2));
    assert(peo1.greaterThan(peo2));
    assert(peo1.greaterThanOrEqualTo(peo2));
  });
});
