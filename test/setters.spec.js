var assert = require('assert');

var test_index = require('./_test_index');
var Peo = test_index.Peo;
var amendPrimeExponent = test_index.amendPrimeExponent;
var incrementFromIntegerPower = test_index.incrementFromIntegerPower;
var setNumbers = test_index.setNumbers;

describe("Extra checks on the setter functions", function() {

  it("Cannot amend prime exponent to be a non-integer", function() {
    var peo = new Peo(6, 5)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:1, 3:1, 5:-1})
    amendPrimeExponent(peo, 2, 1.5)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:1, 3:1, 5:-1})
  })

  it("Putting peo * n^0 does nothing", function() {
    var peo = new Peo(6, 5)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:1, 3:1, 5:-1})
    incrementFromIntegerPower(peo, 3, 0)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:1, 3:1, 5:-1})
  })

  it("If prime vector contains a falsey item, ignore it when calculating numbers", function() {
    var peo = new Peo(6, 5)
    peo.p[0] = 1             // Number.parseInt can make 0 or NaN, neither are
    peo.p[NaN] = -2          // good for exponentiation. Ignore them.
    setNumbers(peo)
    assert.strictEqual(peo.getNum(), 6)
    assert.strictEqual(peo.getDenom(), 5)
  })

})
