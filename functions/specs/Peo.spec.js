var assert = require('assert')
var Fraction = require('fraction.js')

var Peo = require('../Peo')

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

  it("handles big number: new Peo(1e12)", function() {
    var peo = new Peo(1e12)
    assert.strictEqual(peo.toString(), "1000000000000")
  })

  it("returns 1 for bigger number: new Peo(1e12+1)", function() {
    var peo = new Peo(1e12+1)
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

  it("can cube a Peo from initialiser (numeric)", function() {
    var peo = new Peo(2, 5, 3)    // (2/5)^3
    assert.deepStrictEqual(peo.getPrimeExps(), {2:3, 5:-3})
  })

  it("can inverse square a Peo from initialiser (Fraction)", function() {
    var peo = new Peo(new Fraction(6, 5), -2)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:-2, 3:-2, 5:2})
  })

  it("can power^10 a Peo from initialiser (object)", function() {
    var peo = new Peo({101:2, 103:-4}, -107)
    assert.deepStrictEqual(peo.getPrimeExps(), {101:-214, 103:428})
  })

  it("can cube a Peo from mult", function() {
    var peo = (new Peo(5, 3)).mult(new Peo(2, 5), 3)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:3, 5:-2, 3:-1})
  })

  it("can chain mults together", function() {
    var peo = (new Peo(2, 3)).mult(new Peo(3, 5)).mult(new Peo(5, 7)).mult(new Peo(7, 11))
    assert.deepStrictEqual(peo.getPrimeExps(), {2:1, 11:-1})
  })

  it("decimal powers are ignored", function() {
    var peo = new Peo(2, 3, 3.1415)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:1,3:-1})
  })

  it("null powers are ignored", function() {
    var peo = new Peo(2, 3, null)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:1,3:-1})
  })

  it("zero powers give 1/1 (numeric initialiser)", function() {
    var peo = new Peo(2, 3, 0)
    assert.deepStrictEqual(peo.getPrimeExps(), {})
  })

  it("zero powers give 1/1 (fraction initialiser)", function() {
    var peo = new Peo(new Fraction(2, 3), 0)
    assert.deepStrictEqual(peo.getPrimeExps(), {})
  })

  it("zero powers give 1/1 (object initialiser)", function() {
    var peo = new Peo({2:1, 3:-1}, 0)
    assert.deepStrictEqual(peo.getPrimeExps(), {})
  })

  it("zero powers give 1/1 (mult)", function() {
    var peo = (new Peo(7, 5)).mult(new Peo(5, 3), 0)
    assert.deepStrictEqual(peo.getPrimeExps(), {7:1, 5:-1})
  })

  it("first power same as default (numeric initialiser)", function() {
    var peo1 = new Peo(4, 5, 1)
    var peo2 = new Peo(4, 5)
    assert.deepStrictEqual(peo1.getPrimeExps(), peo2.getPrimeExps())
    assert.deepStrictEqual(peo1.getPrimeExps(), {2:2,5:-1})
  })

  it("first power same as default (fraction initialiser)", function() {
    var peo1 = new Peo(new Fraction(4, 5), 1)
    var peo2 = new Peo(new Fraction(4, 5))
    assert.deepStrictEqual(peo1.getPrimeExps(), peo2.getPrimeExps())
    assert.deepStrictEqual(peo1.getPrimeExps(), {2:2,5:-1})
  })

  it("first power same as default (object initialiser)", function() {
    var peo1 = new Peo({4:1,5:-1}, 1)
    var peo2 = new Peo({4:1,5:-1})
    assert.deepStrictEqual(peo1.getPrimeExps(), peo2.getPrimeExps())
    assert.deepStrictEqual(peo1.getPrimeExps(), {2:2,5:-1})
  })

  it("first power same as default (mult)", function() {
    var peo1 = (new Peo(3, 4)).mult(new Peo(4, 5), 1)
    var peo2 = (new Peo(3, 4)).mult(new Peo(4, 5))
    assert.deepStrictEqual(peo1.getPrimeExps(), peo2.getPrimeExps())
    assert.deepStrictEqual(peo1.getPrimeExps(), {3:1,5:-1})
  })

  it("can multiply all the big numbers from 1e9 to 1e9+10a and measure 2-height", function() {
    var start  = 1000000000
    var finish = 1000000010
    var peo = new Peo()
    for (var i=start; i<=finish; i++) {
      peo = peo.mult(new Peo(i))
    }
    assert.deepStrictEqual(peo.getPrimeExps()[2], 17)
  })

  it("can make a big combinatoric number and compare a set of prime exponents using getPrimeExps(array)", function() {
    var n = 1000000
    var c = 100
    var peo = new Peo()
    for (var i=0; i<c; i++) {
      peo = peo.mult(new Peo(n-i, i+1))
    }
    var expected = {2:7, 3:2, 5:4, 7:1, 41:1, 43:0, 999983:1}
    assert.deepStrictEqual(peo.getPrimeExps([2,3,5,7,41,43,999983]), expected)
  })

  it("can check a set of exponents", function() {
    var n = 100
    var c = 43
    var peo = new Peo()
    for (var i=0; i<c; i++) {
      peo = peo.mult(new Peo(n-i, i+1))
    }
    var expected = {2:5, 5:2, 29:1, 83:1, 101:null}
    assert(peo.checkPrimeExps(expected))
  })

  it("check getPrimeExps() returns a copy, not the original", function() {
    var peo = new Peo(13, 44)
    var resultPrivate = peo.p
    var resultPublic = peo.getPrimeExps()
    var resultFromTest = {2:-2, 11:-1, 13:1}
    assert.deepStrictEqual(resultPrivate, resultPublic)
    assert.deepStrictEqual(resultPrivate, resultFromTest)
    assert(resultPrivate !== resultPublic, "Private result is original, Public result is a copy")
  })

  it("check peo.copy() returns a copy of the Peo, not the original", function() {
    var peo1 = new Peo(13, 44)
    var peo2 = peo1.copy()
    var exps1 = peo1.getPrimeExps()
    var exps2 = peo2.getPrimeExps()
    var exps3 = {2:-2, 11:-1, 13:1}
    assert(peo1 !== peo2, "Peo objects have different identity")
    assert(exps1 !== exps2, "Peo prime exponent objects have different identity")
    assert.deepStrictEqual(exps1, exps2)
    assert.deepStrictEqual(exps1, exps3)
  })

  it("can calculate Peo.fact(4) as 24", function() {
    var peo = Peo.fact(4)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:3, 3:1})
  })

  it("can calculate Peo.fact(15) as 1,307,674,368,000", function() {
    var peo = Peo.fact(15)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:11, 3:6, 5:3, 7:2, 11:1, 13:1})
  })

  it("does not calculate Peo.fact(4.001)", function() {
    var peo = Peo.fact(4.001)
    assert.deepStrictEqual(peo.getPrimeExps(), {})
  })

  it('does not calculate Peo.fact("aString")', function() {
    var peo = Peo.fact("aString")
    assert.deepStrictEqual(peo.getPrimeExps(), {})
  })

  it("can calculate Peo.binom(4, 2) as 6", function() {
    var peo = Peo.binom(4, 2)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:1, 3:1})
  })

  it("can calculate Peo.binom(20, 10) as 184756", function() {
    var peo = Peo.binom(20, 10)
    assert.deepStrictEqual(peo.getText(), "184756")
  })

  it("can calculate Peo.binom(71, 9) as 74473879480", function() {
    var peo = Peo.binom(71, 9)
    assert.deepStrictEqual(peo.getText(), "74473879480")
  })

})
