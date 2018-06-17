var assert = require('assert')
var Fraction = require('fraction.js')

var Peo = require('../Peo.js')

describe("The Peo class", function() {
  // var peo = null

  beforeEach(function() {
    // peo = new Peo(3, 2)   // "3/2"
  })

  var check_1 = function(peo) {
    assert.strictEqual(peo.getPrimeExp(2), 0)
    assert.strictEqual(peo.getPrimeExp(3), 0)
    assert.strictEqual(peo.getPrimeExp(5), 0)
    assert.strictEqual(peo.getPrimeExp(7), 0)
    assert.strictEqual(peo.getPrimeExp(11), 0)
    assert.strictEqual(peo.getPrimeExp(65537), 0)
    assert.deepStrictEqual(peo.getFraction(), new Fraction(1))
    assert.strictEqual(peo.getText(), "1")
    assert.strictEqual(peo.toString(), "1")
  }

  var check_60 = function(peo) {
    assert.strictEqual(peo.getPrimeExp(2), 2)
    assert.strictEqual(peo.getPrimeExp(3), 1)
    assert.strictEqual(peo.getPrimeExp(5), 1)
    assert.strictEqual(peo.getPrimeExp(7), 0)
    assert.strictEqual(peo.getPrimeExp(11), 0)
    assert.strictEqual(peo.getPrimeExp(65537), 0)
    assert.deepStrictEqual(peo.getFraction(), new Fraction(60))
    assert.strictEqual(peo.getText(), "60")
    assert.strictEqual(peo.toString(), "60")
  }

  var check_56_45 = function(peo) {
    assert.strictEqual(peo.getPrimeExp(2), 3)
    assert.strictEqual(peo.getPrimeExp(3), -2)
    assert.strictEqual(peo.getPrimeExp(5), -1)
    assert.strictEqual(peo.getPrimeExp(7), 1)
    assert.strictEqual(peo.getPrimeExp(11), 0)
    assert.strictEqual(peo.getPrimeExp(65537), 0)
    assert.deepStrictEqual(peo.getFraction(), new Fraction(56, 45))
    assert.strictEqual(peo.getText(), "56/45")
    assert.strictEqual(peo.toString(), "56/45")
  }

  it("constructs Peo for 56/45 correctly using new Peo({2:3, 7:1, 3:-2, 5:-1})", function() {
    var peo = new Peo({2:3, 7:1, 3:-2, 5:-1})
    check_56_45(peo)
  })

  it("constructs Peo for 56/45 correctly using new Peo({2:3, 7:1, 3:-2, 5:-1, 11:0, 13:0}) which has redundant prime components", function() {
    var peo = new Peo({2:3, 7:1, 3:-2, 5:-1, 11:0, 13:0})
    check_56_45(peo)
  })

  it("constructs Peo for 56/45 correctly using new Peo(56, 45)", function() {
    var peo = new Peo(56, 45)
    check_56_45(peo)
  })

  it("constructs Peo for 56/45 correctly using new Peo(new Fraction(56, 45))", function() {
    var peo = new Peo(new Fraction(56, 45))
    check_56_45(peo)
  })

  it("constructs Peo for 60 correctly using new Peo(60)", function() {
    var peo = new Peo(60)
    check_60(peo)
  })

  it("constructs Peo for 60 correctly using new Peo({6:1, 10:1}) (normally factors in object would be prime)", function() {
    var peo = new Peo({6:1, 10:1})    // Should change it to {2:2, 3:1, 5:1}
    check_60(peo)
  })

  it("constructs Peo for 871933 correctly using new Peo({871933:1})", function() {
    // 871933 = 89 * 97 * 101 (primes)
    var peo = new Peo({871933:1})
    assert.strictEqual(peo.getPrimeExp(2), 0)
    assert.strictEqual(peo.getPrimeExp(83), 0)
    assert.strictEqual(peo.getPrimeExp(89), 1)
    assert.strictEqual(peo.getPrimeExp(97), 1)
    assert.strictEqual(peo.getPrimeExp(101), 1)
    assert.strictEqual(peo.getPrimeExp(103), 0)
  })

  it("handles big number: new Peo(1000000)", function() {
    var peo = new Peo(1000000)
    assert.strictEqual(peo.toString(), "1000000")
  })

  it("returns 1 for bigger number: new Peo(1000001)", function() {
    var peo = new Peo(1000001)
    check_1(peo)
  })

  it("returns 1 for invalid input: new Peo('aString')", function() {
    var peo = new Peo('aString')      // Single quotes!
    check_1(peo)
  })

  it("returns 1 for invalid input: new Peo()", function() {
    var peo = new Peo()
    check_1(peo)
  })

  it("constructs 56/45 correctly even with bad key: new Peo({'badKey':1, 2:3, 7:1, 3:-2, 5:-1})", function() {
    var peo = new Peo({'badKey':1, 2:3, 7:1, 3:-2, 5:-1})
    check_56_45(peo)
  })

  it("constructs 56/45 correctly even with bad value: new Peo({13:'badValue', 2:3, 7:1, 3:-2, 5:-1})", function() {
    // Make sure 13 is not an index checked! (It would currently fail for 11:'badValue')
    // Really this index should be stripped out when its being created...
    // that's in the incrementFromObjectPower function.
    var peo = new Peo({13:'badValue', 2:3, 7:1, 3:-2, 5:-1})
    check_56_45(peo)
  })

  it("can multiply new Peo(12) by new Peo(1, 10) to get new Peo(6, 5)", function() {
    var peo_12 = new Peo(12)
    var peo_1_10 = new Peo(1, 10)
    var peo_mult = peo_12.mult(peo_1_10)
    var peo_6_5 = new Peo(6, 5)
    assert.deepStrictEqual(peo_mult.getPrimeExps(), peo_6_5.getPrimeExps())
  })

  it("can cube a Peo", function() {
    var peo = (new Peo()).mult(new Peo(2), 3)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:3})
  })

})
