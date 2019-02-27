/* eslint-disable func-names */

var assert = require('assert');

var testIndex = require('./_test_index');
var Peo = testIndex.Peo;

describe('The Peo class', function () {
  it('can initialise from {num:3, denom:4, pow:5}, in object format num is mandatory', function () {
    var peo = new Peo({num: 3, denom: 4, pow: 5});
    assert.deepStrictEqual(peo.getPrimeExps(), {2: -10, 3: 5});
  });

  it('can initialise from {num:6, denom:4, pow:-2}', function () {
    var peo = new Peo({num: 6, denom: 4, pow: -2});
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 2, 3: -2});
  });

  it('can initialise from {num:35, pow:-2}', function () {
    var peo = new Peo({num: 35, pow: -2});
    assert.deepStrictEqual(peo.getPrimeExps(), {5: -2, 7: -2});
  });

  it('can initialise from {num:14, denom:100}', function () {
    var peo = new Peo({num: 14, denom: 100});
    assert.deepStrictEqual(peo.getPrimeExps(), {2: -1, 5: -2, 7: 1});
  });

  it('can initialise from {num:77}', function () {
    var peo = new Peo({num: 77});
    assert.deepStrictEqual(peo.getPrimeExps(), {7: 1, 11: 1});
  });

  it('can initialise from {num:1}', function () {
    var peo = new Peo({num: 1});
    assert.deepStrictEqual(peo.getPrimeExps(), {});
  });

  it('gives default value from {num:"77"} since num must be numeric', function () {
    var peo = new Peo({num: '77'});
    assert.deepStrictEqual(peo.getPrimeExps(), {});
  });

  var checkIs1 = function (peo) {
    assert.strictEqual(peo.getAsDecimal(), 1);
    assert.strictEqual(peo.getNum(), 1);
    assert.strictEqual(peo.getDenom(), 1);
    assert.strictEqual(peo.getPrimeExp(2), 0);
    assert.strictEqual(peo.getPrimeExp(3), 0);
    assert.strictEqual(peo.getPrimeExp(5), 0);
    assert.strictEqual(peo.getPrimeExp(7), 0);
    assert.strictEqual(peo.getPrimeExp(11), 0);
    assert.strictEqual(peo.getPrimeExp(65537), 0);
    assert.strictEqual(peo.getAsResultText(), '1');
    assert.strictEqual(peo.toString(), '{}');
  };

  var checkIs60 = function (peo) {
    assert.strictEqual(peo.getAsDecimal(), 60);
    assert.strictEqual(peo.getNum(), 60);
    assert.strictEqual(peo.getDenom(), 1);
    assert.strictEqual(peo.getPrimeExp(2), 2);
    assert.strictEqual(peo.getPrimeExp(3), 1);
    assert.strictEqual(peo.getPrimeExp(5), 1);
    assert.strictEqual(peo.getPrimeExp(7), 0);
    assert.strictEqual(peo.getPrimeExp(11), 0);
    assert.strictEqual(peo.getPrimeExp(65537), 0);
    assert.strictEqual(peo.getAsResultText(), '60');
    assert.strictEqual(peo.toString(), '{"2":2,"3":1,"5":1}');
  };

  var checkIs56Over45 = function (peo) {
    assert.strictEqual(peo.getAsDecimal(), 56 / 45);
    assert.strictEqual(peo.getNum(), 56);
    assert.strictEqual(peo.getDenom(), 45);
    assert.strictEqual(peo.getPrimeExp(2), 3);
    assert.strictEqual(peo.getPrimeExp(3), -2);
    assert.strictEqual(peo.getPrimeExp(5), -1);
    assert.strictEqual(peo.getPrimeExp(7), 1);
    assert.strictEqual(peo.getPrimeExp(11), 0);
    assert.strictEqual(peo.getPrimeExp(65537), 0);
    assert.strictEqual(peo.getAsResultText(), '56/45');
    assert.strictEqual(peo.toString(), '{"2":3,"3":-2,"5":-1,"7":1}');
  };

  it('constructs a copy of peo, when doing new Peo(peo)', function () {
    var peo1 = new Peo(5, 4);
    var peo2 = new Peo(peo1);
    assert(peo1 !== peo2);
    assert.deepStrictEqual(peo1.getPrimeExps(), peo2.getPrimeExps());
  });

  it('constructs a copy of Nth power of peo, when doing new Peo(peo, N)', function () {
    var peo1 = new Peo(5, 4);
    var peo2 = new Peo(peo1, -2);
    var peo3 = new Peo(16, 25);
    assert(peo1 !== peo2);
    assert.deepStrictEqual(peo2.getPrimeExps(), peo3.getPrimeExps());
  });

  it('constructs Peo for 56/45 correctly using new Peo({2:3, 7:1, 3:-2, 5:-1})', function () {
    var peo = new Peo({2: 3, 7: 1, 3: -2, 5: -1});
    checkIs56Over45(peo);
  });

  it('constructs Peo for 56/45 correctly using new Peo({2:3, 7:1, 3:-2, 5:-1, 11:0, 13:0}) which has redundant prime components', function () {
    var peo = new Peo({2: 3, 7: 1, 3: -2, 5: -1, 11: 0, 13: 0});
    checkIs56Over45(peo);
  });

  it('constructs Peo for 56/45 correctly using new Peo(56, 45)', function () {
    var peo = new Peo(56, 45);
    checkIs56Over45(peo);
  });

  it('constructs Peo for 56/45 correctly using new Peo("56/45")', function () {
    var peo = new Peo('56/45');
    checkIs56Over45(peo);
  });

  it('gives correct result near integer cut-off for new Peo("168897325606883/43324900128225")', function () {
    var peo = new Peo('168897325606883/43324900128225');
    assert.deepStrictEqual(peo.getPrimeExps(), {
      3: -7,
      5: -2,
      97: 1,
      101: 1,
      103: 1,
      109: 1,
      127: 1,
      65537: -1
    });
  });

  it('gives default Peo on new Peo(-1)', function () {
    var peo = new Peo(-1);
    assert.deepStrictEqual(peo.getNum(), 1);
    assert.deepStrictEqual(peo.getDenom(), 1);
  });

  it('constructs Peo for 100000000000001 correctly using new Peo(100000000000001)', function () {
    var peo = new Peo(100000000000001);
    assert.deepStrictEqual(peo.getPrimeExps(), {
      29: 1,
      101: 1,
      281: 1,
      121499449: 1
    });
  });

  it('constructs Peo for (10/7)^1000000000000001 correctly using new Peo(20, 14, 1000000000000001)', function () {
    var peo = new Peo(20, 14, 100000000000001);
    assert.deepStrictEqual(peo.getPrimeExps(), {
      2: 100000000000001,
      5: 100000000000001,
      7: -100000000000001
    });
  });

  it('constructs Peo for 60 correctly using new Peo(60)', function () {
    var peo = new Peo(60);
    checkIs60(peo);
  });

  it('constructs Peo for 60 correctly using new Peo({6:1, 10:1}) (normally factors in object would be prime)', function () {
    var peo = new Peo({6: 1, 10: 1});    // Should change it to {2:2, 3:1, 5:1}
    checkIs60(peo);
  });

  it('can produce 9 stats on a fraction', function () {
    var peo = new Peo({13: 1, 17: -1000, 19: 12, 25: 3});    // 25 will go to 5
    assert.strictEqual(peo.countDistinctFactors(), 4);
    assert.strictEqual(peo.countFactors(), 1019);
    assert.strictEqual(peo.getLowestPrime(), 5);
    assert.strictEqual(peo.getHighestPrime(), 19);
    assert.strictEqual(peo.getLowestExp(), -1000);
    assert.strictEqual(peo.getHighestExp(), 12);
    assert.strictEqual(peo.getHighestAbsExp(), 1000);
    assert.strictEqual(peo.getLiouville(), -1);
    assert.strictEqual(peo.getMobius(), 0);
  });

  it('can produce 9 stats on a large integer', function () {
    var peo = new Peo({5: 1, 17: 21, 25: 22});    // 25 will go to 5
    assert.strictEqual(peo.countDistinctFactors(), 2);
    assert.strictEqual(peo.countFactors(), 66);
    assert.strictEqual(peo.getLowestPrime(), 5);
    assert.strictEqual(peo.getHighestPrime(), 17);
    assert.strictEqual(peo.getLowestExp(), 21);
    assert.strictEqual(peo.getHighestExp(), 45);
    assert.strictEqual(peo.getHighestAbsExp(), 45);
    assert.strictEqual(peo.getLiouville(), 1);
    assert.strictEqual(peo.getMobius(), 0);
  });

  it('can produce 9 stats on reciprocal of a large integer', function () {
    var peo = new Peo({23: -13, 25: -17, 35: -10});     // 25, 35 composite!
    assert.strictEqual(peo.countDistinctFactors(), 3);
    assert.strictEqual(peo.countFactors(), 67);
    assert.strictEqual(peo.getLowestPrime(), 5);
    assert.strictEqual(peo.getHighestPrime(), 23);
    assert.strictEqual(peo.getLowestExp(), -44);
    assert.strictEqual(peo.getHighestExp(), -10);
    assert.strictEqual(peo.getHighestAbsExp(), 44);
    assert.strictEqual(peo.getLiouville(), -1);
    assert.strictEqual(peo.getMobius(), 0);
  });

  it('can calculate Mobius for a square-free integer', function () {
    assert.strictEqual((new Peo(1)).getMobius(), 1);
    assert.strictEqual((new Peo(2)).getMobius(), -1);
    assert.strictEqual((new Peo(3)).getMobius(), -1);
    assert.strictEqual((new Peo(4)).getMobius(), 0);
    assert.strictEqual((new Peo(6)).getMobius(), 1);
    assert.strictEqual((new Peo(43)).getMobius(), -1);
    assert.strictEqual((new Peo(49)).getMobius(), 0);
    assert.strictEqual((new Peo(77)).getMobius(), 1);
    assert.strictEqual((new Peo(105)).getMobius(), -1);
    assert.strictEqual((new Peo(210)).getMobius(), 1);
    assert.strictEqual((new Peo(420)).getMobius(), 0);
  });

  it('constructs Peo for 871933 correctly using new Peo({871933:1})', function () {
    // 871933 = 89 * 97 * 101 (primes)
    var peo = new Peo({871933: 1});
    assert.strictEqual(peo.getPrimeExp(2), 0);
    assert.strictEqual(peo.getPrimeExp(83), 0);
    assert.strictEqual(peo.getPrimeExp(89), 1);
    assert.strictEqual(peo.getPrimeExp(97), 1);
    assert.strictEqual(peo.getPrimeExp(101), 1);
    assert.strictEqual(peo.getPrimeExp(103), 0);
  });

  it('handles big number: new Peo(1e15)', function () {
    var peo = new Peo(1e15);
    assert.strictEqual(peo.getAsFractionText(), '1000000000000000');
  });

  it('returns 1 for bigger number: new Peo(1e15+1)', function () {
    var peo = new Peo(1e15 + 1);
    checkIs1(peo);
  });

  it('does not initialise from negative decimal', function () {
    var peo = new Peo(-1.5);
    assert.strictEqual(peo.toString(), '{}');
  });

  it('can initialise using decimal from 3/2', function () {
    var peo = new Peo(3 / 2);
    assert.strictEqual(peo.toString(), '{"2":-1,"3":1}');
  });

  it('can initialise using decimal from 7/3', function () {
    var peo = new Peo(7 / 3);
    assert.strictEqual(peo.toString(), '{"3":-1,"7":1}');
  });

  it('can initialise using decimal 0.3', function () {
    var peo = new Peo(0.3);
    assert.strictEqual(peo.toString(), '{"2":-1,"3":1,"5":-1}');
  });

  it('can initialise using decimal string "0.3"', function () {
    var peo = new Peo('0.3');
    assert.strictEqual(peo.toString(), '{"2":-1,"3":1,"5":-1}');
  });

  it('can initialise using decimal from 0.1 + 0.2 ignoring small numeric error', function () {
    // 0.1 + 0.2 = 0.30000000000000004
    var peo = new Peo(0.1 + 0.2);
    assert.strictEqual(peo.toString(), '{"2":-1,"3":1,"5":-1}');
  });

  it('can initialise using decimal from 1/7 + 1/13', function () {
    var peo = new Peo(1 / 7 + 1 / 13);
    assert.strictEqual(peo.toString(), '{"2":2,"5":1,"7":-1,"13":-1}');
  });

  it('can initialise using decimal from 5 + 1/3 + 1/47', function () {
    var peo = new Peo(5 + 1 / 3 + 1 / 47);
    assert.strictEqual(peo.toString(), '{"3":-1,"5":1,"47":-1,"151":1}');
  });

  it('can initialise using decimal 0.2*0.2 ignoring small numerical error', function () {
    // 0.2 * 0.2 = 0.04000000000000001
    var peo = new Peo(0.2 * 0.2);
    assert.strictEqual(peo.toString(), '{"5":-2}');
  });

  it('can initialise using decimal 0.2 to power 2', function () {
    var peo = new Peo(0.2, 2);
    assert.strictEqual(peo.toString(), '{"5":-2}');
  });

  it('can initialise using decimal 0.18237', function () {
    var peo = new Peo(0.18237);
    assert.strictEqual(peo.toString(), '{"2":-5,"3":1,"5":-5,"6079":1}');
  });

  it('can initialise using decimal string "0.18237"', function () {
    var peo = new Peo('0.18237');
    assert.strictEqual(peo.toString(), '{"2":-5,"3":1,"5":-5,"6079":1}');
  });

  it('can calculate text for (new Peo(11, 1)).pow(4) as 14641 in integer format', function () {
    var peo = (new Peo(11, 1)).pow(4);
    assert.strictEqual(peo.getAsResultText(), '14641');
  });

  it('can calculate text for (new Peo(11, 2)).pow(4) as 14641/16 in fractional format', function () {
    var peo = (new Peo(11, 2)).pow(4);
    assert.strictEqual(peo.getAsResultText(), '14641/16');
  });

  it('can calculate text for (new Peo(11, 2)).pow(-1000) as 10^-740.36 in exponential format', function () {
    var peo = (new Peo(11, 2)).pow(-1000);
    assert.strictEqual(peo.getAsResultText(), '10^-740.36');
  });

  it('can calculate text for (new Peo(11, 2)).pow(1000000000) as 10^740362689.49 in exponential format', function () {
    var peo = (new Peo(11, 2)).pow(1000000000);
    assert.strictEqual(peo.getAsResultText(), '10^740362689.49');
  });

  it("returns 1 for invalid input: new Peo('aString')", function () {
    var peo = new Peo('aString');      // Single quotes!
    checkIs1(peo);
  });

  it('returns 1 for invalid input: new Peo()', function () {
    var peo = new Peo();
    checkIs1(peo);
  });

  it("constructs 56/45 correctly even with bad key: new Peo({'badKey':1, 2:3, 7:1, 3:-2, 5:-1})", function () {
    var peo = new Peo({'badKey': 1, 2: 3, 7: 1, 3: -2, 5: -1});
    checkIs56Over45(peo);
  });

  it("constructs 56/45 correctly even with bad value: new Peo({13:'badValue', 2:3, 7:1, 3:-2, 5:-1})", function () {
    // Make sure 13 is not an index checked! (It would currently fail for 11:'badValue')
    // Really this index should be stripped out when its being created...
    // that's in the incrementFromObjectPower function.
    var peo = new Peo({13: 'badValue', 2: 3, 7: 1, 3: -2, 5: -1});
    checkIs56Over45(peo);
  });

  it('can multiply new Peo(12) by new Peo(1, 10) to get new Peo(6, 5)', function () {
    var peo12 = new Peo(12);
    var peo1Over10 = new Peo(1, 10);
    var peoMult = peo12.mult(peo1Over10);
    var peo6Over5 = new Peo(6, 5);
    assert.deepStrictEqual(peoMult.getPrimeExps(), peo6Over5.getPrimeExps());
  });

  it('can multiply new Peo(12) by 14 to get new Peo(168)', function () {
    var peoStart = new Peo(12);
    var peoActual = peoStart.mult(14);
    var peoExpected = new Peo(168);
    assert.deepStrictEqual(peoActual.getPrimeExps(), peoExpected.getPrimeExps());
  });

  it('can multiply new Peo(30) by 35^3 to get new Peo(1286250)', function () {
    var peoStart = new Peo(30);
    var peoActual = peoStart.mult(35, 3);
    var peoExpected = new Peo(1286250);
    assert.deepStrictEqual(peoActual.getPrimeExps(), peoExpected.getPrimeExps());
  });

  it('can cube a Peo from initialiser (numeric)', function () {
    var peo = new Peo(2, 5, 3);    // (2/5)^3
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 3, 5: -3});
  });

  it('can inverse square a Peo from initialiser (String)', function () {
    var peo = new Peo('6/5', -2);
    assert.deepStrictEqual(peo.getPrimeExps(), {2: -2, 3: -2, 5: 2});
  });

  it('can power^10 a Peo from initialiser (object)', function () {
    var peo = new Peo({101: 2, 103: -4}, -107);
    assert.deepStrictEqual(peo.getPrimeExps(), {101: -214, 103: 428});
  });

  it('can cube a Peo from mult', function () {
    var peo = (new Peo(5, 3)).mult(new Peo(2, 5), 3);
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 3, 5: -2, 3: -1});
  });

  it('can chain mults together', function () {
    var peo = (new Peo(2, 3)).mult(new Peo(3, 5)).mult(new Peo(5, 7)).mult(new Peo(7, 11));
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 1, 11: -1});
  });

  it('decimal powers are ignored', function () {
    var peo = new Peo(2, 3, 3.1415);
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 1, 3: -1});
  });

  it('null powers are ignored', function () {
    var peo = new Peo(2, 3, null);
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 1, 3: -1});
  });

  it('zero powers give 1/1 (numeric initialiser)', function () {
    var peo = new Peo(2, 3, 0);
    assert.deepStrictEqual(peo.getPrimeExps(), {});
  });

  it('zero powers give 1/1 (string initialiser)', function () {
    var peo = new Peo('2/3', 0);
    assert.deepStrictEqual(peo.getPrimeExps(), {});
  });

  it('zero powers give 1/1 (object initialiser)', function () {
    var peo = new Peo({2: 1, 3: -1}, 0);
    assert.deepStrictEqual(peo.getPrimeExps(), {});
  });

  it('zero powers give 1/1 (mult)', function () {
    var peo = (new Peo(7, 5)).mult(new Peo(5, 3), 0);
    assert.deepStrictEqual(peo.getPrimeExps(), {7: 1, 5: -1});
  });

  it('first power same as default (numeric initialiser)', function () {
    var peo1 = new Peo(4, 5, 1);
    var peo2 = new Peo(4, 5);
    assert.deepStrictEqual(peo1.getPrimeExps(), peo2.getPrimeExps());
    assert.deepStrictEqual(peo1.getPrimeExps(), {2: 2, 5: -1});
  });

  it('first power same as default (string initialiser)', function () {
    var peo1 = new Peo('4/5', 1);
    var peo2 = new Peo('4/5');
    assert.deepStrictEqual(peo1.getPrimeExps(), peo2.getPrimeExps());
    assert.deepStrictEqual(peo1.getPrimeExps(), {2: 2, 5: -1});
  });

  it('first power same as default (object initialiser)', function () {
    var peo1 = new Peo({4: 1, 5: -1}, 1);
    var peo2 = new Peo({4: 1, 5: -1});
    assert.deepStrictEqual(peo1.getPrimeExps(), peo2.getPrimeExps());
    assert.deepStrictEqual(peo1.getPrimeExps(), {2: 2, 5: -1});
  });

  it('first power same as default (mult)', function () {
    var peo1 = (new Peo(3, 4)).mult(new Peo(4, 5), 1);
    var peo2 = (new Peo(3, 4)).mult(new Peo(4, 5));
    assert.deepStrictEqual(peo1.getPrimeExps(), peo2.getPrimeExps());
    assert.deepStrictEqual(peo1.getPrimeExps(), {3: 1, 5: -1});
  });

  it('can multiply all the big numbers from 1e9 to 1e9+10a and measure 2-height', function () {
    var start  = 1000000000;
    var finish = 1000000010;
    var peo = new Peo();
    for (var i = start; i <= finish; i++) {
      peo = peo.mult(new Peo(i));
    }
    assert.deepStrictEqual(peo.getPrimeExps()[2], 17);
  });

  it('can make a big combinatoric number and compare a set of prime exponents using getPrimeExps(array)', function () {
    var n = 1000000;
    var c = 100;
    var peo = new Peo();
    for (var i = 0; i < c; i++) {
      peo = peo.mult(new Peo(n - i, i + 1));
    }
    var expected = {2: 7, 3: 2, 5: 4, 7: 1, 41: 1, 43: 0, 999983: 1};
    assert.deepStrictEqual(peo.getPrimeExps([2, 3, 5, 7, 41, 43, 999983]), expected);
  });

  it('can check a set of exponents (true case)', function () {
    var peo = new Peo(15, 14);
    var expected = {2: -1, 7: -1, 11: null, 13: 0};
    assert(peo.checkPrimeExps(expected));
  });

  it('can check a set of exponents (false case)', function () {
    var peo = new Peo(15, 14);
    var expected = {2: -1, 7: 1};
    assert(!peo.checkPrimeExps(expected));
  });

  it('check getPrimeExps() returns a copy, not the original', function () {
    var peo = new Peo(13, 44);
    var resultPrivate = peo.p;
    var resultPublic = peo.getPrimeExps();
    var resultFromTest = {2: -2, 11: -1, 13: 1};
    assert.deepStrictEqual(resultPrivate, resultPublic);
    assert.deepStrictEqual(resultPrivate, resultFromTest);
    assert(resultPrivate !== resultPublic, 'Private result is original, Public result is a copy');
  });

  it('check peo.copy() returns a copy of the Peo, not the original', function () {
    var peo1 = new Peo(13, 44);
    var peo2 = peo1.copy();
    var exps1 = peo1.getPrimeExps();
    var exps2 = peo2.getPrimeExps();
    var exps3 = {2: -2, 11: -1, 13: 1};
    assert(peo1 !== peo2, 'Peo objects have different identity');
    assert(exps1 !== exps2, 'Peo prime exponent objects have different identity');
    assert.deepStrictEqual(exps1, exps2);
    assert.deepStrictEqual(exps1, exps3);
  });

  it('can calculate Peo.fact(-5) as defaulting to 1! = 1', function () {
    var peo = Peo.fact(-5);
    assert.deepStrictEqual(peo.getPrimeExps(), {});
  });

  it('can calculate Peo.fact(0) as defaulting to 1! = 1', function () {
    var peo = Peo.fact(0);
    assert.deepStrictEqual(peo.getPrimeExps(), {});
  });

  it('can calculate Peo.fact(1) as 1! = 1', function () {
    var peo = Peo.fact(1);
    assert.deepStrictEqual(peo.getPrimeExps(), {});
  });

  it('can calculate Peo.fact(4) as 4! = 24', function () {
    var peo = Peo.fact(4);
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 3, 3: 1});
  });

  it('can calculate Peo.fact(5.499) as 5! = 120', function () {
    var peo = Peo.fact(5.499);
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 3, 3: 1, 5: 1});
  });

  it('can calculate Peo.fact(5.5) as 6! = 720', function () {
    var peo = Peo.fact(5.5);
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 4, 3: 2, 5: 1});
  });

  it('can calculate Peo.fact(15) as 15! = 1,307,674,368,000', function () {
    var peo = Peo.fact(15);
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 11, 3: 6, 5: 3, 7: 2, 11: 1, 13: 1});
  });

  it('can calculate Peo.fact(-Infinity) as defaulting to 1! = 1', function () {
    var peo = Peo.fact(-Infinity);
    assert.deepStrictEqual(peo.getPrimeExps(), {});
  });

  it('can calculate Peo.fact(Infinity) as defaulting to 1! = 1', function () {
    var peo = Peo.fact(Infinity);
    assert.deepStrictEqual(peo.getPrimeExps(), {});
  });

  it('can calculate Peo.fact("aString") as defaulting to 1! = 1', function () {
    var peo = Peo.fact('aString');
    assert.deepStrictEqual(peo.getPrimeExps(), {});
  });

  it('can calculate Peo.perm(7, "aString") as 7! = 5040', function () {
    var peo = Peo.perm(7, 'aString');
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 4, 3: 2, 5: 1, 7: 1});
  });

  it('can calculate Peo.multSeq(7, 2.499) as 7*6 = 42', function () {
    var peo = Peo.multSeq(7, 2.499);
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 1, 3: 1, 7: 1});
  });

  it('can calculate Peo.perm(7, 2.5) as 7*6*5 = 210', function () {
    var peo = Peo.perm(7, 2.5);
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 1, 3: 1, 5: 1, 7: 1});
  });

  it('can calculate Peo.perm(7, -4) as Peo.perm(7, 7) = 7! = 5040', function () {
    var peo = Peo.perm(7, -4);
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 4, 3: 2, 5: 1, 7: 1});
  });

  it('can calculate Peo.perm(7, 0) as 1', function () {
    var peo = Peo.perm(7, 0);
    assert.deepStrictEqual(peo.getPrimeExps(), {});
  });

  it('can calculate Peo.perm(7, 1) as 7', function () {
    var peo = Peo.perm(7, 1);
    assert.deepStrictEqual(peo.getPrimeExps(), {7: 1});
  });

  it('can calculate Peo.perm(7, 4) as 7*6*5*4 = 840', function () {
    var peo = Peo.perm(7, 4);
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 3, 3: 1, 5: 1, 7: 1});
  });

  it('can calculate Peo.perm(7, 6) as 7*6*5*4*3*2 = 5040', function () {
    var peo = Peo.perm(7, 6);
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 4, 3: 2, 5: 1, 7: 1});
  });

  it('can calculate Peo.perm(7, 7) as 7*6*5*4*3*2*1 = 5040', function () {
    var peo = Peo.perm(7, 7);
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 4, 3: 2, 5: 1, 7: 1});
  });

  it('can calculate Peo.perm(7, 8) as .perm(7, 7) = 7! = 5040', function () {
    var peo = Peo.perm(7, 8);
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 4, 3: 2, 5: 1, 7: 1});
  });

  it('can calculate Peo.multSeq(7, 4, -1) as .perm(7, 4) = 7*6*5*4 = 840', function () {
    var peo = Peo.multSeq(7, 4, -1);
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 3, 3: 1, 5: 1, 7: 1});
  });

  it('can calculate Peo.multSeq(7, 4, 1) as 7*8*9*10 = 5040', function () {
    var peo = Peo.multSeq(7, 4, 1);
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 4, 3: 2, 5: 1, 7: 1});
  });

  it('can calculate Peo.multSeq(7, 4, 2) as 7*9*11*13 = 9009', function () {
    var peo = Peo.multSeq(7, 4, 2);
    assert.deepStrictEqual(peo.getPrimeExps(), {3: 2, 7: 1, 11: 1, 13: 1});
  });

  it('can calculate Peo.multSeq(7, 4, "aString") as defaulting to .perm(7, 4) = 7*6*5*4 = 840', function () {
    var peo = Peo.multSeq(7, 4, 'aString');
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 3, 3: 1, 5: 1, 7: 1});
  });

  it('can calculate Peo.multSeq(7, 4, 0) as defaulting to .perm(7, 4) = 7*6*5*4 = 840', function () {
    var peo = Peo.multSeq(7, 4, 0);
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 3, 3: 1, 5: 1, 7: 1});
  });

  it('can calculate Peo.multSeq(1, 5, 6) as 1*7*13*19*25', function () {
    var peo = Peo.multSeq(1, 5, 6);
    assert.deepStrictEqual(peo.getPrimeExps(), {5: 2, 7: 1, 13: 1, 19: 1});
  });

  it('can calculate Peo.multSeq(100, 4, -7) as 100*93*86*79', function () {
    var peo = Peo.multSeq(100, 4, -7);
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 3, 5: 2, 3: 1, 31: 1, 43: 1, 79: 1});
  });

  it('can calculate Peo.binom(4, 2) as 6', function () {
    var peo = Peo.binom(4, 2);
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 1, 3: 1});
  });

  it('can calculate Peo.binom(20, 10) as 184756', function () {
    var peo = Peo.binom(20, 10);
    assert.deepStrictEqual(peo.getAsResultText(), '184756');
  });

  it('can calculate Peo.binom(71, 9) as 74473879480', function () {
    var peo = Peo.binom(71, 9);
    assert.deepStrictEqual(peo.getAsResultText(), '74473879480');
  });

  it('can calculate Peo.binom(71, 62) as 74473879480', function () {
    var peo = Peo.binom(71, 62);      // 71 - 9 =
    assert.deepStrictEqual(peo.getAsResultText(), '74473879480');
  });

  it('can calculate (new Peo(32768)).getLog(2) as exactly 15', function () {
    var peo = new Peo(32768);
    assert.strictEqual(peo.getLog(2), 15);
  });

  it('can calculate (new Peo(9, 2)).getLog() (natural log) as approx 1.504077', function () {
    var result = (new Peo(9, 2)).getLog();
    assert(Math.abs(result - 1.504077) < 1e-6);
  });

  it('can calculate (new Peo(2310, 221)).getLog(19) as approx 0.7970', function () {
    var result = (new Peo(2310, 221)).getLog(19);
    assert(Math.abs(result - 0.7970) < 1e-4);
  });

  it('can calculate (Peo.binom(71, 9)).getLog(10) as approx 10.8720', function () {
    var result = Peo.binom(71, 9).getLog(10);
    assert(Math.abs(result - 10.8720) < 1e-4);
  });

  it('can calculate all natural logs of new Peo(1200, 77)', function () {
    var peo = new Peo(1200, 77);
    assert(Math.abs(peo.getLog() - 2.746271) < 1e-6, 'Failed for Peo');
    assert(Math.abs(peo.getLogNum() - 7.090076) < 1e-6, 'Failed for Num');
    assert(Math.abs(peo.getLogDenom() - 4.343805) < 1e-6, 'Failed for Denom');
  });

  it('can calculate Peo.prim() as 1', function () {
    var peo = Peo.prim();
    assert.deepStrictEqual(peo.getPrimeExps(), {});
  });

  it('can calculate Peo.prim(1) as 1', function () {
    var peo = Peo.prim(1);
    assert.deepStrictEqual(peo.getPrimeExps(), {});
  });

  it('can calculate Peo.prim(2) as 2', function () {
    var peo = Peo.prim(2);
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 1});
  });

  it('can calculate Peo.multPrimes(1, 2) as 2', function () {
    var peo = Peo.multPrimes(1, 2);
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 1});
  });

  it('can calculate Peo.multPrimes(2, 2) as 2', function () {
    var peo = Peo.multPrimes(2, 2);
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 1});
  });

  it('can calculate Peo.multPrimes(1, 3) as 6', function () {
    var peo = Peo.multPrimes(1, 3);
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 1, 3: 1});
  });

  it('can calculate Peo.multPrimes(3, 2) as 6', function () {
    var peo = Peo.multPrimes(3, 2);
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 1, 3: 1});
  });

  it('can calculate Peo.prim("aString") as 1', function () {
    var peo = Peo.prim('aString');
    assert.deepStrictEqual(peo.getPrimeExps(), {});
  });

  it('can calculate Peo.prim(6.9999) gives same result as .prim(5) = 2*3*5', function () {
    var peo = Peo.prim(6.9999);
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 1, 3: 1, 5: 1});
  });

  it('can calculate Peo.prim(7) as 2*3*5*7', function () {
    var peo = Peo.prim(7);
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 1, 3: 1, 5: 1, 7: 1});
  });

  it('can calculate Peo.prim(19) as 2*3*5*7*11*13*17*19', function () {
    var peo = Peo.prim(19);
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 1, 3: 1, 5: 1, 7: 1, 11: 1, 13: 1, 17: 1, 19: 1});
  });

  it('can calculate Peo.prim(22.999) as same as .prim(19)', function () {
    var peo = Peo.prim(22.999);
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 1, 3: 1, 5: 1, 7: 1, 11: 1, 13: 1, 17: 1, 19: 1});
  });

  it('can calculate Peo.multPrimes(8, 10) as 1', function () {
    var peo = Peo.multPrimes(8, 10);
    assert.deepStrictEqual(peo.getPrimeExps(), {});
  });

  it('can calculate Peo.multPrimes(7.0001, 10.9999) as 1', function () {
    var peo = Peo.multPrimes(7.0001, 10.9999);
    assert.deepStrictEqual(peo.getPrimeExps(), {});
  });

  it('can calculate Peo.multPrimes(7, 11) as 7*11', function () {
    var peo = Peo.multPrimes(7, 11);
    assert.deepStrictEqual(peo.getPrimeExps(), {7: 1, 11: 1});
  });

  it('can calculate Peo.multPrimes(12, 6) as 7*11', function () {
    var peo = Peo.multPrimes(12, 6);
    assert.deepStrictEqual(peo.getPrimeExps(), {7: 1, 11: 1});
  });

  it('can calculate Peo.multPrimes(13, 5) as 5*7*11*13', function () {
    var peo = Peo.multPrimes(13, 5);
    assert.deepStrictEqual(peo.getPrimeExps(), {5: 1, 7: 1, 11: 1, 13: 1});
  });

  it('can calculate Peo.multPrimes(96, 114)', function () {
    var peo = Peo.multPrimes(96, 114);
    assert.deepStrictEqual(peo.getPrimeExps(), {97: 1, 101: 1, 103: 1, 107: 1, 109: 1, 113: 1});
  });

  it('can calculate Peo.multPrimes(17, "aString") as 2*3*5*7*11*13*17', function () {
    var peo = Peo.multPrimes(17, 'aString');
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 1, 3: 1, 5: 1, 7: 1, 11: 1, 13: 1, 17: 1});
  });

  it('can calculate Peo.multPrimes(17, -10) as 2*3*5*7*11*13*17', function () {
    var peo = Peo.multPrimes(17, -10);
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 1, 3: 1, 5: 1, 7: 1, 11: 1, 13: 1, 17: 1});
  });

  it('can calculate Peo.multPrimes(-10, 17) as 2*3*5*7*11*13*17', function () {
    var peo = Peo.multPrimes(-10, 17);
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 1, 3: 1, 5: 1, 7: 1, 11: 1, 13: 1, 17: 1});
  });

  it('can calculate Peo.multPrimes(17, 1) as 2*3*5*7*11*13*17', function () {
    var peo = Peo.multPrimes(17, 1);
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 1, 3: 1, 5: 1, 7: 1, 11: 1, 13: 1, 17: 1});
  });

  it('can calculate Peo.multPrimes(17, 2) as 2*3*5*7*11*13*17', function () {
    var peo = Peo.multPrimes(17, 2);
    assert.deepStrictEqual(peo.getPrimeExps(), {2: 1, 3: 1, 5: 1, 7: 1, 11: 1, 13: 1, 17: 1});
  });

  it('can calculate Peo.multPrimes(17, 3) as 3*5*7*11*13*17', function () {
    var peo = Peo.multPrimes(17, 3);
    assert.deepStrictEqual(peo.getPrimeExps(), {3: 1, 5: 1, 7: 1, 11: 1, 13: 1, 17: 1});
  });

  it('can calculate Peo.multPrimes(17, 7) as 7*11*13*17', function () {
    var peo = Peo.multPrimes(17, 7);
    assert.deepStrictEqual(peo.getPrimeExps(), {7: 1, 11: 1, 13: 1, 17: 1});
  });

  it('can calculate Peo.multPrimes(17, 8) as 11*13*17', function () {
    var peo = Peo.multPrimes(17, 8);
    assert.deepStrictEqual(peo.getPrimeExps(), {11: 1, 13: 1, 17: 1});
  });

  it('can calculate Peo.multPrimes(100, 70) as 71*73*79*83*89*97', function () {
    var peo = Peo.multPrimes(100, 70);
    assert.deepStrictEqual(peo.getPrimeExps(), {71: 1, 73: 1, 79: 1, 83: 1, 89: 1, 97: 1});
  });

  it('can calculate (new Peo(6, 5)).pow(-3) as (5/6)^3', function () {
    var peo1 = new Peo(6, 5);
    var peo2 = peo1.pow(-3);
    assert(peo1 !== peo2);
    assert.deepStrictEqual(peo1.getPrimeExps(), {2: 1, 3: 1, 5: -1});
    assert.deepStrictEqual(peo2.getPrimeExps(), {2: -3, 3: -3, 5: 3});
  });

  it('can split 14/15 by () to get 14/15', function () {
    var peo = new Peo(14, 15);
    var array = peo.split();
    assert(array.length === 1);
    assert.strictEqual(array[0].getAsResultText(), '14/15');
  });

  it('can split 14/15 by (5) to get 1/5, 14/3', function () {
    var peo = new Peo(14, 15);
    var array = peo.split(5);
    assert(array.length === 2);
    assert.strictEqual(array[0].getAsResultText(), '1/5');
    assert.strictEqual(array[1].getAsResultText(), '14/3');
  });

  it('can split 14/15 by (2, 11, "aString") to get 2/1, 1/1, 1/1, 7/15', function () {
    var peo = new Peo(14, 15);
    var array = peo.split(2, 11, 'aString');    // Test invalid values such as strings
    assert(array.length === 4);
    assert.strictEqual(array[0].getAsResultText(), '2');
    assert.strictEqual(array[1].getAsResultText(), '1');
    assert.strictEqual(array[2].getAsResultText(), '1');
    assert.strictEqual(array[3].getAsResultText(), '7/15');
  });

  it('can split 14/15 by (3, 3) to get 1/3, 1/1, 14/5', function () {
    var peo = new Peo(14, 15);
    var array = peo.split(3, 3);
    assert(array.length === 3);
    assert.strictEqual(array[0].getAsResultText(), '1/3');
    assert.strictEqual(array[1].getAsResultText(), '1');
    assert.strictEqual(array[2].getAsResultText(), '14/5');
  });

  it('can split 174440/73962963 by ([89, 3, 29]) to get 89/2349, 1960/31487', function () {
    var peo = new Peo(2 * 2 * 2 * 5 * 7 * 7 * 89, 3 * 3 * 3 * 3 * 23 * 29 * 37 * 37);
    var array = peo.split([89, 3, 29]);
    assert(array.length === 2);
    assert.strictEqual(array[0].getAsResultText(), '89/2349');
    assert.strictEqual(array[1].getAsResultText(), '1960/31487');
  });

  it('can split 174440/73962963 5 ways using numbers and arrays together', function () {
    var peo = new Peo(2 * 2 * 2 * 5 * 7 * 7 * 89, 3 * 3 * 3 * 3 * 23 * 29 * 37 * 37);
    var array = peo.split(3, [37, 41, 7], [2, null, 5], 71);   // Test invalid value inside array
    assert(array.length === 5);
    assert.strictEqual(array[0].getAsResultText(), '1/81');
    assert.strictEqual(array[1].getAsResultText(), '49/1369');
    assert.strictEqual(array[2].getAsResultText(), '40');
    assert.strictEqual(array[3].getAsResultText(), '1');
    assert.strictEqual(array[4].getAsResultText(), '89/667');
  });

  it('can split big number using [2,3], 5', function () {
    var peo = new Peo({2: 15, 3: -7, 5: 2, 13: 1, 29: -2, 1979: 1});
    var array = peo.split([2, 3], 5);
    assert(array.length === 3);
    assert.strictEqual(array[0].getAsResultText(), '32768/2187');
    assert.strictEqual(array[1].getAsResultText(), '25');
    assert.strictEqual(array[2].getAsResultText(), '25727/841');
  });

  it('can compress a Peo', function () {
    var peo = new Peo({2: 15, 3: -7, 5: 2, 13: 1, 29: -2});
    assert(!peo.number);       // Cached information not yet calculated
    peo.getDenom();
    assert(peo.number.d > 0);  // Cached information stored. Using denominator as example.
    peo.compress();
    assert(!peo.number);       // Cached information has been removed again
  });

  // A couple of fractions very close to 1 previously did not work
  // due to large numerators and denominators.
  it("can deal with {'2':-1054, '3':665}", function () {
    var peo = new Peo({'2': -1054, '3': 665 });
    var val = peo.getAsDecimal();
    assert(val < 1.000044);
    assert(val > 1.000043);
  });
  it("can deal with {'2':-301994, '3':190537}", function () {
    var peo = new Peo({ '2': -301994, '3': 190537 });
    var val = peo.getAsDecimal();
    assert(val < 0.999999936);
    assert(val > 0.999999935);
  });
});
