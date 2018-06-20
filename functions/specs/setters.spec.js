var assert = require('assert')
var Fraction = require('fraction.js')

var Peo = require('../Peo')
var amendPrimeExponent = require('../setters/amendPrimeExponent')
var incrementFromIntegerPower = require('../setters/incrementFromIntegerPower')
var setNumbers = require('../setters/setNumbers')

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

  it("If numbers are too large, fraction does not calculate", function() {
    var peo = Peo.binom(60, 20) // 16 digits. Ln = 35.97
    setNumbers(peo)
    assert.deepStrictEqual(peo.getFraction(), new Fraction(1))
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