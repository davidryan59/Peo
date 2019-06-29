/* eslint-disable func-names */
/* eslint-disable no-undefined */

var assert = require('assert');

var testIndex = require('./_test_index');
var Peo = testIndex.Peo;


describe('Peo maths functions', function () {
  it('cover an edge case with zero exponent, not normally reached', function () {
    var peo = new Peo(1003, 1004);
    peo.p = Object.assign({1: 0}, peo.p);
    // A zero exponent means need to look at next exponent inside is1
    assert(!peo.is1());
  });

  // Unary comparisons
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

  // Binary comparisons, otherInput is a Peo
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

  // Binary comparisons, otherInput is a positive decimal number
  it('test binary comparison operators on peo1 less than decimal2', function () {
    var peo1 = new Peo(3, 5);
    var decimal2 = 60 / 7;
    assert(!peo1.equals(decimal2));
    assert(peo1.notEquals(decimal2));
    assert(peo1.lessThan(decimal2));
    assert(peo1.lessThanOrEqualTo(decimal2));
    assert(!peo1.greaterThan(decimal2));
    assert(!peo1.greaterThanOrEqualTo(decimal2));
  });

  it('test binary comparison operators on peo1 equal to decimal2', function () {
    var peo1 = new Peo(4, 6);
    var decimal2 = 2000 / 3000;
    assert(peo1.equals(decimal2));
    assert(!peo1.notEquals(decimal2));
    assert(!peo1.lessThan(decimal2));
    assert(peo1.lessThanOrEqualTo(decimal2));
    assert(!peo1.greaterThan(decimal2));
    assert(peo1.greaterThanOrEqualTo(decimal2));
  });

  it('test binary comparison operators on peo1 greater than decimal2', function () {
    var peo1 = new Peo(3, 5);
    var decimal2 = 2 / 4;
    assert(!peo1.equals(decimal2));
    assert(peo1.notEquals(decimal2));
    assert(!peo1.lessThan(decimal2));
    assert(!peo1.lessThanOrEqualTo(decimal2));
    assert(peo1.greaterThan(decimal2));
    assert(peo1.greaterThanOrEqualTo(decimal2));
  });

  // Test .mult can handle decimals, and powers of decimals
  it('test peo.mult(1.5)', function () {
    var peoInput = new Peo(4, 3);
    var decimalNumber = 1.5;
    var peoExpected = new Peo(4, 2);
    var peoActual = peoInput.mult(decimalNumber);
    assert(peoExpected.equals(peoActual));
  });

  it('test peo.mult(7/6)', function () {
    var peoInput = new Peo(8, 7);
    var decimalNumber = 7 / 6;
    var peoExpected = new Peo(8, 6);
    var peoActual = peoInput.mult(decimalNumber);
    assert(peoExpected.equals(peoActual));
  });

  it('test peo.mult(7/6, -2)', function () {
    var peoInput = new Peo(49, 48);
    var decimalNumber = 7 / 6;         // (7/6)^1
    var power = -2;                     // (7/6)^-2 = 36/49
    var peoExpected = new Peo(36, 48); // 49/48 * 36/49 = 36/48 = 3/4
    var peoActual = peoInput.mult(decimalNumber, power);
    assert(peoExpected.equals(peoActual));
  });

  it('test peo.mult(1001/1000)', function () {
    var peoInput = new Peo(1000);
    var decimalNumber = 1001 / 1000;
    var peoExpected = new Peo(1001);
    var peoActual = peoInput.mult(decimalNumber);
    assert(peoExpected.equals(peoActual));
  });
});
