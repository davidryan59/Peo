var assert = require('assert')
var Fraction = require('fraction.js')

var Peo = require('../Peo')

describe("The Peo class", function() {

  var check_1 = function(peo) {
    assert.strictEqual(peo.getVal(), 1)
    assert.strictEqual(peo.getNum(), 1)
    assert.strictEqual(peo.getDenom(), 1)
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
    assert.strictEqual(peo.getVal(), 60)
    assert.strictEqual(peo.getNum(), 60)
    assert.strictEqual(peo.getDenom(), 1)
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
    assert.strictEqual(peo.getVal(), 56/45)
    assert.strictEqual(peo.getNum(), 56)
    assert.strictEqual(peo.getDenom(), 45)
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

  it("gives correct result near integer cut-off for new Peo(new Fraction(168897325606883, 43324900128225))", function() {
    var peo = new Peo(new Fraction(168897325606883, 43324900128225))
    assert.deepStrictEqual(peo.getPrimeExps(), {
      3:-7,
      5:-2,
      97:1,
      101:1,
      103:1,
      109:1,
      127:1,
      65537:-1
    })
  })

  // // Passed in 468ms on a laptop (June 2018)
  // // For speed, comment this out
  // // Test it as and when needed
  // it("gives correct result near integer cut-off with large semiprimes on top and bottom", function() {
  //   var peo = new Peo(100008420087241, 100011280317367)
  //   assert.deepStrictEqual(peo.getPrimeExps(), {
  //     10000121:1,
  //     10000721:1,
  //     10000537:-1,
  //     10000591:-1
  //   })
  // })

  it("constructs Peo for 60 correctly using new Peo(60)", function() {
    var peo = new Peo(60)
    check_60(peo)
  })

  it("constructs Peo for 60 correctly using new Peo({6:1, 10:1}) (normally factors in object would be prime)", function() {
    var peo = new Peo({6:1, 10:1})    // Should change it to {2:2, 3:1, 5:1}
    check_60(peo)
  })

  it("can produce 9 stats on a fraction", function() {
    var peo = new Peo({13:1, 17:-1000, 19:12, 25:3})    // 25 will go to 5
    assert.strictEqual(peo.countDistinctFactors(), 4)
    assert.strictEqual(peo.countFactors(), 1019)
    assert.strictEqual(peo.getLowestPrime(), 5)
    assert.strictEqual(peo.getHighestPrime(), 19)
    assert.strictEqual(peo.getLowestExp(), -1000)
    assert.strictEqual(peo.getHighestExp(), 12)
    assert.strictEqual(peo.getHighestAbsExp(), 1000)
    assert.strictEqual(peo.getLiouville(), -1)
    assert.strictEqual(peo.getMobius(), 0)
  })

  it("can produce 9 stats on a large integer", function() {
    var peo = new Peo({5:1, 17:21, 25:22})    // 25 will go to 5
    assert.strictEqual(peo.countDistinctFactors(), 2)
    assert.strictEqual(peo.countFactors(), 66)
    assert.strictEqual(peo.getLowestPrime(), 5)
    assert.strictEqual(peo.getHighestPrime(), 17)
    assert.strictEqual(peo.getLowestExp(), 21)
    assert.strictEqual(peo.getHighestExp(), 45)
    assert.strictEqual(peo.getHighestAbsExp(), 45)
    assert.strictEqual(peo.getLiouville(), 1)
    assert.strictEqual(peo.getMobius(), 0)
  })

  it("can produce 9 stats on reciprocal of a large integer", function() {
    var peo = new Peo({23:-13, 25:-17, 35:-10})     // 25, 35 composite!
    assert.strictEqual(peo.countDistinctFactors(), 3)
    assert.strictEqual(peo.countFactors(), 67)
    assert.strictEqual(peo.getLowestPrime(), 5)
    assert.strictEqual(peo.getHighestPrime(), 23)
    assert.strictEqual(peo.getLowestExp(), -44)
    assert.strictEqual(peo.getHighestExp(), -10)
    assert.strictEqual(peo.getHighestAbsExp(), 44)
    assert.strictEqual(peo.getLiouville(), -1)
    assert.strictEqual(peo.getMobius(), 0)
  })

  it("can calculate Mobius for a square-free integer", function() {
    assert.strictEqual((new Peo(1)).getMobius(), 1)
    assert.strictEqual((new Peo(2)).getMobius(), -1)
    assert.strictEqual((new Peo(3)).getMobius(), -1)
    assert.strictEqual((new Peo(4)).getMobius(), 0)
    assert.strictEqual((new Peo(6)).getMobius(), 1)
    assert.strictEqual((new Peo(43)).getMobius(), -1)
    assert.strictEqual((new Peo(49)).getMobius(), 0)
    assert.strictEqual((new Peo(77)).getMobius(), 1)
    assert.strictEqual((new Peo(105)).getMobius(), -1)
    assert.strictEqual((new Peo(210)).getMobius(), 1)
    assert.strictEqual((new Peo(420)).getMobius(), 0)
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

  it("handles big number: new Peo(1e15)", function() {
    var peo = new Peo(1e15)
    assert.strictEqual(peo.toString(), "1000000000000000")
  })

  it("returns 1 for bigger number: new Peo(1e15+1)", function() {
    var peo = new Peo(1e15+1)
    check_1(peo)
  })

  it("can calculate text for (new Peo(11, 1)).pow(4) as 14641 in integer format", function() {
    var peo = (new Peo(11, 1)).pow(4)
    assert.strictEqual(peo.getText(), "14641")
  })

  it("can calculate text for (new Peo(11, 2)).pow(4) as 14641/16 in fractional format", function() {
    var peo = (new Peo(11, 2)).pow(4)
    assert.strictEqual(peo.getText(), "14641/16")
  })

  it("can calculate text for (new Peo(11, 2)).pow(-1000) as 10^-740.36 in exponential format", function() {
    var peo = (new Peo(11, 2)).pow(-1000)
    assert.strictEqual(peo.getText(), "10^-740.36")
  })

  it("can calculate text for (new Peo(11, 2)).pow(1000000000) as 10^740362689.49 in exponential format", function() {
    var peo = (new Peo(11, 2)).pow(1000000000)
    assert.strictEqual(peo.getText(), "10^740362689.49")
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

  it("can check a set of exponents (true case)", function() {
    var peo = new Peo(15, 14)
    var expected = {2:-1, 7:-1, 11:null, 13:0}
    assert(peo.checkPrimeExps(expected))
  })

  it("can check a set of exponents (false case)", function() {
    var peo = new Peo(15, 14)
    var expected = {2:-1, 7:1}
    assert(!peo.checkPrimeExps(expected))
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

  it("can calculate Peo.fact(-5) as defaulting to 1! = 1", function() {
    var peo = Peo.fact(-5)
    assert.deepStrictEqual(peo.getPrimeExps(), {})
  })

  it("can calculate Peo.fact(0) as defaulting to 1! = 1", function() {
    var peo = Peo.fact(0)
    assert.deepStrictEqual(peo.getPrimeExps(), {})
  })

  it("can calculate Peo.fact(1) as 1! = 1", function() {
    var peo = Peo.fact(1)
    assert.deepStrictEqual(peo.getPrimeExps(), {})
  })

  it("can calculate Peo.fact(4) as 4! = 24", function() {
    var peo = Peo.fact(4)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:3, 3:1})
  })

  it("can calculate Peo.fact(5.499) as 5! = 120", function() {
    var peo = Peo.fact(5.499)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:3, 3:1, 5:1})
  })

  it("can calculate Peo.fact(5.5) as 6! = 720", function() {
    var peo = Peo.fact(5.5)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:4, 3:2, 5:1})
  })

  it("can calculate Peo.fact(15) as 15! = 1,307,674,368,000", function() {
    var peo = Peo.fact(15)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:11, 3:6, 5:3, 7:2, 11:1, 13:1})
  })

  it("can calculate Peo.fact(-Infinity) as defaulting to 1! = 1", function() {
    var peo = Peo.fact(-Infinity)
    assert.deepStrictEqual(peo.getPrimeExps(), {})
  })

  it("can calculate Peo.fact(Infinity) as defaulting to 1! = 1", function() {
    var peo = Peo.fact(Infinity)
    assert.deepStrictEqual(peo.getPrimeExps(), {})
  })

  it('can calculate Peo.fact("aString") as defaulting to 1! = 1', function() {
    var peo = Peo.fact("aString")
    assert.deepStrictEqual(peo.getPrimeExps(), {})
  })

  it('can calculate Peo.fact(7, "aString") as 7! = 5040', function() {
    var peo = Peo.fact(7, "aString")
    assert.deepStrictEqual(peo.getPrimeExps(), {2:4, 3:2, 5:1, 7:1})
  })

  it("can calculate Peo.fact(7, 2.499) as 7*6 = 42", function() {
    var peo = Peo.fact(7, 2.499)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:1, 3:1, 7:1})
  })

  it("can calculate Peo.fact(7, 2.5) as 7*6*5 = 210", function() {
    var peo = Peo.fact(7, 2.5)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:1, 3:1, 5:1, 7:1})
  })

  it("can calculate Peo.fact(7, -4) as Peo.fact(7, 7) = 7! = 5040", function() {
    var peo = Peo.fact(7, -4)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:4, 3:2, 5:1, 7:1})
  })

  it("can calculate Peo.fact(7, 0) as 1", function() {
    var peo = Peo.fact(7, 0)
    assert.deepStrictEqual(peo.getPrimeExps(), {})
  })

  it("can calculate Peo.fact(7, 1) as 7", function() {
    var peo = Peo.fact(7, 1)
    assert.deepStrictEqual(peo.getPrimeExps(), {7:1})
  })

  it("can calculate Peo.fact(7, 4) as 7*6*5*4 = 840", function() {
    var peo = Peo.fact(7, 4)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:3, 3:1, 5:1, 7:1})
  })

  it("can calculate Peo.fact(7, 6) as 7*6*5*4*3*2 = 5040", function() {
    var peo = Peo.fact(7, 6)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:4, 3:2, 5:1, 7:1})
  })

  it("can calculate Peo.fact(7, 7) as 7*6*5*4*3*2*1 = 5040", function() {
    var peo = Peo.fact(7, 7)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:4, 3:2, 5:1, 7:1})
  })

  it("can calculate Peo.fact(7, 8) as .fact(7, 7) = 7! = 5040", function() {
    var peo = Peo.fact(7, 8)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:4, 3:2, 5:1, 7:1})
  })

  it("can calculate Peo.fact(7, 4, -1) as .fact(7, 4) = 7*6*5*4 = 840", function() {
    var peo = Peo.fact(7, 4, -1)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:3, 3:1, 5:1, 7:1})
  })

  it("can calculate Peo.fact(7, 4, 1) as 7*8*9*10 = 5040", function() {
    var peo = Peo.fact(7, 4, 1)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:4, 3:2, 5:1, 7:1})
  })

  it("can calculate Peo.fact(7, 4, 2) as 7*9*11*13 = 9009", function() {
    var peo = Peo.fact(7, 4, 2)
    assert.deepStrictEqual(peo.getPrimeExps(), {3:2, 7:1, 11:1, 13:1})
  })

  it('can calculate Peo.fact(7, 4, "aString") as defaulting to .fact(7, 4) = 7*6*5*4 = 840', function() {
    var peo = Peo.fact(7, 4, "aString")
    assert.deepStrictEqual(peo.getPrimeExps(), {2:3, 3:1, 5:1, 7:1})
  })

  it('can calculate Peo.fact(7, 4, 0) as defaulting to .fact(7, 4) = 7*6*5*4 = 840', function() {
    var peo = Peo.fact(7, 4, 0)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:3, 3:1, 5:1, 7:1})
  })

  it("can calculate Peo.fact(1, 5, 6) as 1*7*13*19*25", function() {
    var peo = Peo.fact(1, 5, 6)
    assert.deepStrictEqual(peo.getPrimeExps(), {5:2, 7:1, 13:1, 19:1})
  })

  it("can calculate Peo.fact(100, 4, -7) as 100*93*86*79", function() {
    var peo = Peo.fact(100, 4, -7)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:3, 5:2, 3:1, 31:1, 43:1, 79:1})
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

  it("can calculate Peo.binom(71, 62) as 74473879480", function() {
    var peo = Peo.binom(71, 62)      // 71 - 9 =
    assert.deepStrictEqual(peo.getText(), "74473879480")
  })

  it("can calculate (new Peo(32768)).getLog(2) as exactly 15", function() {
    var peo = new Peo(32768)
    assert.strictEqual(peo.getLog(2), 15)
  })

  it("can calculate (new Peo(9, 2)).getLog() (natural log) as approx 1.504077", function() {
    var result = (new Peo(9, 2)).getLog()
    assert(Math.abs(result-1.504077) < 1e-6)
  })

  it("can calculate (new Peo(2310, 221)).getLog(19) as approx 0.7970", function() {
    var result = (new Peo(2310, 221)).getLog(19)
    assert(Math.abs(result-0.7970) < 1e-4)
  })

  it("can calculate (Peo.binom(71, 9)).getLog(10) as approx 10.8720", function() {
    var result = Peo.binom(71, 9).getLog(10)
    assert(Math.abs(result-10.8720) < 1e-4)
  })

  it("can calculate all natural logs of new Peo(1200, 77)", function() {
    var peo = new Peo(1200, 77)
    assert(Math.abs(peo.getLog()-2.746271) < 1e-6, "Failed for Peo")
    assert(Math.abs(peo.getLogNum()-7.090076) < 1e-6, "Failed for Num")
    assert(Math.abs(peo.getLogDenom()-4.343805) < 1e-6, "Failed for Denom")
  })

  it("can calculate Peo.prim() as 1", function() {
    var peo = Peo.prim()
    assert.deepStrictEqual(peo.getPrimeExps(), {})
  })

  it("can calculate Peo.prim(1) as 1", function() {
    var peo = Peo.prim(1)
    assert.deepStrictEqual(peo.getPrimeExps(), {})
  })

  it("can calculate Peo.prim(2) as 2", function() {
    var peo = Peo.prim(2)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:1})
  })

  it("can calculate Peo.prim(1, 2) as 2", function() {
    var peo = Peo.prim(1, 2)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:1})
  })

  it("can calculate Peo.prim(2, 2) as 2", function() {
    var peo = Peo.prim(2, 2)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:1})
  })

  it("can calculate Peo.prim(1, 3) as 6", function() {
    var peo = Peo.prim(1, 3)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:1, 3:1})
  })

  it("can calculate Peo.prim(3, 2) as 6", function() {
    var peo = Peo.prim(3, 2)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:1, 3:1})
  })

  it('can calculate Peo.prim("aString") as 1', function() {
    var peo = Peo.prim("aString")
    assert.deepStrictEqual(peo.getPrimeExps(), {})
  })

  it("can calculate Peo.prim(6.99) defaulting to .prim(7)", function() {
    var peo = Peo.prim(6.99)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:1, 3:1, 5:1, 7:1})
  })

  it("can calculate Peo.prim(6) as 2*3*5", function() {
    var peo = Peo.prim(6)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:1, 3:1, 5:1})
  })

  it("can calculate Peo.prim(8, 10) as 1", function() {
    var peo = Peo.prim(8, 10)
    assert.deepStrictEqual(peo.getPrimeExps(), {})
  })

  it("can calculate Peo.prim(12, 6) as 7*11", function() {
    var peo = Peo.prim(12, 6)
    assert.deepStrictEqual(peo.getPrimeExps(), {7:1, 11:1})
  })

  it("can calculate Peo.prim(13, 5) as 5*7*11*13", function() {
    var peo = Peo.prim(13, 5)
    assert.deepStrictEqual(peo.getPrimeExps(), {5:1, 7:1, 11:1, 13:1})
  })

  it("can calculate Peo.prim(96, 114)", function() {
    var peo = Peo.prim(96, 114)
    assert.deepStrictEqual(peo.getPrimeExps(), {97:1, 101:1, 103:1, 107:1, 109:1, 113:1})
  })

  it('can calculate Peo.prim(17, "aString") as 2*3*5*7*11*13*17', function() {
    var peo = Peo.prim(17, "aString")
    assert.deepStrictEqual(peo.getPrimeExps(), {2:1, 3:1, 5:1, 7:1, 11:1, 13:1, 17:1})
  })

  it("can calculate Peo.prim(17, -10) as 2*3*5*7*11*13*17", function() {
    var peo = Peo.prim(17, -10)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:1, 3:1, 5:1, 7:1, 11:1, 13:1, 17:1})
  })

  it("can calculate Peo.prim(-10, 17) as 2*3*5*7*11*13*17", function() {
    var peo = Peo.prim(-10, 17)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:1, 3:1, 5:1, 7:1, 11:1, 13:1, 17:1})
  })

  it("can calculate Peo.prim(17, 1) as 2*3*5*7*11*13*17", function() {
    var peo = Peo.prim(17, 1)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:1, 3:1, 5:1, 7:1, 11:1, 13:1, 17:1})
  })

  it("can calculate Peo.prim(17, 2) as 2*3*5*7*11*13*17", function() {
    var peo = Peo.prim(17, 2)
    assert.deepStrictEqual(peo.getPrimeExps(), {2:1, 3:1, 5:1, 7:1, 11:1, 13:1, 17:1})
  })

  it("can calculate Peo.prim(17, 3) as 3*5*7*11*13*17", function() {
    var peo = Peo.prim(17, 3)
    assert.deepStrictEqual(peo.getPrimeExps(), {3:1, 5:1, 7:1, 11:1, 13:1, 17:1})
  })

  it("can calculate Peo.prim(17, 7) as 7*11*13*17", function() {
    var peo = Peo.prim(17, 7)
    assert.deepStrictEqual(peo.getPrimeExps(), {7:1, 11:1, 13:1, 17:1})
  })

  it("can calculate Peo.prim(17, 8) as 11*13*17", function() {
    var peo = Peo.prim(17, 8)
    assert.deepStrictEqual(peo.getPrimeExps(), {11:1, 13:1, 17:1})
  })

  it("can calculate Peo.prim(100, 70) as 71*73*79*83*89*97", function() {
    var peo = Peo.prim(100, 70)
    assert.deepStrictEqual(peo.getPrimeExps(), {71:1, 73:1, 79:1, 83:1, 89:1, 97:1})
  })

  it("can calculate (new Peo(6, 5)).pow(-3) as (5/6)^3", function() {
    var peo1 = new Peo(6, 5)
    var peo2 = peo1.pow(-3)
    assert(peo1!==peo2)
    assert.deepStrictEqual(peo1.getPrimeExps(), {2:1, 3:1, 5:-1})
    assert.deepStrictEqual(peo2.getPrimeExps(), {2:-3, 3:-3, 5:3})
  })

})
