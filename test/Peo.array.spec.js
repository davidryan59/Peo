/* eslint-disable func-names */
/* eslint-disable no-undefined */

var assert = require('assert');

var testIndex = require('./_test_index');
var Peo = testIndex.Peo;


var reduceToHighestPrimePower = function (acc, curr) {
  // Both acc and curr are of form [p, a] representing p^a
  if (!acc || Math.log(acc[0]) * Math.abs(acc[1]) < Math.log(curr[0]) * Math.abs(curr[1])) return curr;
  return acc;
};

var reduceToSmallestPrimePower = function (acc, curr) {
  if (!acc || Math.log(acc[0]) * Math.abs(acc[1]) > Math.log(curr[0]) * Math.abs(curr[1])) return curr;
  return acc;
};

var reduceToHighestPositivePrimePower = function (acc, curr) {
  if (!acc || Math.log(acc[0]) * acc[1] < Math.log(curr[0]) * curr[1]) return curr;
  return acc;
};

var reduceToLowestNegativePrimePower = function (acc, curr) {
  if (!acc || Math.log(acc[0]) * acc[1] > Math.log(curr[0]) * curr[1]) return curr;
  return acc;
};

var reduceByAddingPrimesFunction = function (acc, curr) {
  return 1 * curr[0] + (acc || 0);
};

const reduceArrowAddPrimes = (acc, curr) => (acc || 0) + (1 * curr[0]);

const reduceArrowDotsForEachPrime = acc => (acc || '') + '.';


describe('The Peo class array functions', function () {
  it('can run reducer functions on 1 (but they are undefined, or equal to initial value)', function () {
    var peo = new Peo();
    assert.strictEqual(peo.getAsFractionText(), '1');
    assert.deepStrictEqual(peo.reduce(reduceToHighestPrimePower), undefined);
    assert.deepStrictEqual(peo.reduce(reduceToSmallestPrimePower), undefined);
    assert.deepStrictEqual(peo.reduce(reduceToHighestPositivePrimePower), undefined);
    assert.deepStrictEqual(peo.reduce(reduceToHighestPositivePrimePower, 42), 42);
    assert.deepStrictEqual(peo.reduce(reduceToLowestNegativePrimePower), undefined);
    assert.strictEqual(peo.reduce(reduceByAddingPrimesFunction), undefined);
    assert.strictEqual(peo.reduce(reduceByAddingPrimesFunction, 43), 43);
  });

  it('can run reducer functions on 4', function () {
    var peo = new Peo({2: 2});
    assert.strictEqual(peo.getAsFractionText(), '4');
    assert.deepStrictEqual(peo.reduce(reduceToHighestPrimePower), ['2', 2]);
    assert.deepStrictEqual(peo.reduce(reduceToSmallestPrimePower), ['2', 2]);
    assert.deepStrictEqual(peo.reduce(reduceToHighestPositivePrimePower), ['2', 2]);
    assert.deepStrictEqual(peo.reduce(reduceToLowestNegativePrimePower), ['2', 2]);
    assert.strictEqual(peo.reduce(reduceByAddingPrimesFunction), 2);
  });

  it('can run reducer functions on 400/27', function () {
    var peo = new Peo({2: 4, 3: -3, 5: 2});    // 16 * 25 / 27
    assert.strictEqual(peo.getAsFractionText(), '400/27');
    assert.deepStrictEqual(peo.reduce(reduceToHighestPrimePower), ['3', -3]);
    assert.deepStrictEqual(peo.reduce(reduceToSmallestPrimePower), ['2', 4]);
    assert.deepStrictEqual(peo.reduce(reduceToHighestPositivePrimePower), ['5', 2]);
    assert.deepStrictEqual(peo.reduce(reduceToLowestNegativePrimePower), ['3', -3]);
    assert.strictEqual(peo.reduce(reduceByAddingPrimesFunction), 10);
  });

  it('can run reducer functions on 400', function () {
    var peo = new Peo({2: 4, 5: 2});    // 16 * 25
    assert.strictEqual(peo.getAsFractionText(), '400');
    assert.deepStrictEqual(peo.reduce(reduceToHighestPrimePower), ['5', 2]);
    assert.deepStrictEqual(peo.reduce(reduceToSmallestPrimePower), ['2', 4]);
    assert.deepStrictEqual(peo.reduce(reduceToHighestPositivePrimePower), ['5', 2]);
    assert.deepStrictEqual(peo.reduce(reduceToLowestNegativePrimePower), ['2', 4]);
    assert.strictEqual(peo.reduce(reduceByAddingPrimesFunction), 7);
  });

  it('can run reducer functions on 1/400', function () {
    var peo = new Peo({2: -4, 5: -2});    // 1 / 16 * 25
    assert.strictEqual(peo.getAsFractionText(), '1/400');
    assert.deepStrictEqual(peo.reduce(reduceToHighestPrimePower), ['5', -2]);
    assert.deepStrictEqual(peo.reduce(reduceToSmallestPrimePower), ['2', -4]);
    assert.deepStrictEqual(peo.reduce(reduceToHighestPositivePrimePower), ['2', -4]);
    assert.deepStrictEqual(peo.reduce(reduceToLowestNegativePrimePower), ['5', -2]);
    assert.strictEqual(peo.reduce(reduceByAddingPrimesFunction), 7);
  });

  it('can run reducer functions on 500/27', function () {
    var peo = new Peo({2: 2, 3: -3, 5: 3});    // 4 * 125 / 27
    assert.strictEqual(peo.getAsFractionText(), '500/27');
    assert.deepStrictEqual(peo.reduce(reduceToHighestPrimePower), ['5', 3]);
    assert.deepStrictEqual(peo.reduce(reduceToSmallestPrimePower), ['2', 2]);
    assert.deepStrictEqual(peo.reduce(reduceToHighestPositivePrimePower), ['5', 3]);
    assert.deepStrictEqual(peo.reduce(reduceToLowestNegativePrimePower), ['3', -3]);
    assert.strictEqual(peo.reduce(reduceByAddingPrimesFunction), 10);
  });

  it('can run reducer functions on 10933/83521', function () {
    var peo = new Peo({13: 1, 17: -4, 29: 2});    // 13 * 841 / 83521
    assert.strictEqual(peo.getAsFractionText(), '10933/83521');
    assert.deepStrictEqual(peo.reduce(reduceToHighestPrimePower), ['17', -4]);
    assert.deepStrictEqual(peo.reduce(reduceToSmallestPrimePower), ['13', 1]);
    assert.deepStrictEqual(peo.reduce(reduceToHighestPositivePrimePower), ['29', 2]);
    assert.deepStrictEqual(peo.reduce(reduceToLowestNegativePrimePower), ['17', -4]);
    assert.strictEqual(peo.reduce(reduceByAddingPrimesFunction), 59);
  });

  it('can run arrow function reducers on 10933/83521', function () {
    var peo = new Peo({13: 1, 17: -4, 29: 2});    // 13 * 841 / 83521
    assert.strictEqual(peo.getAsFractionText(), '10933/83521');
    assert.strictEqual(peo.reduce(reduceArrowAddPrimes), 59);
    assert.strictEqual(peo.reduce(reduceArrowDotsForEachPrime), '...');
  });

  it('can run arrow function reducers on 1/24', function () {
    var peo = new Peo({2: -3, 3: -1});    // 1 / 8 * 3
    assert.strictEqual(peo.getAsFractionText(), '1/24');
    assert.strictEqual(peo.reduce(reduceArrowAddPrimes), 5);
    assert.strictEqual(peo.reduce(reduceArrowDotsForEachPrime), '..');
  });
});
