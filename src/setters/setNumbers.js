var setNumbers = function setNumbers(peo) {
  // Exit if already set
  if (peo.n) return;

  // Calculate many things from the primes and their exponents
  var val = 1;
  var num = 1;
  var denom = 1;
  var lnVal = 0;
  var lnNum = 0;
  var lnDenom = 0;
  var cDF = 0;
  var cF = 0;
  var pLo = null;
  var pHi = null;
  var eLo = null;
  var eHi = null;
  var eAbsHi = null;
  var primeExpObj = peo.getPrimeExps();
  var keys = Object.keys(primeExpObj);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];                    // key is a string
    var value = primeExpObj[key];
    var prime = Number.parseInt(key, 10);
    var exponent = Number.parseInt(value, 10);
    if (prime && exponent) {
      cDF++;
      cF += Math.abs(exponent);
      if (cDF === 1) {
        pLo = prime;
        pHi = prime;
        eLo = exponent;
        eHi = exponent;
        eAbsHi = Math.abs(exponent);
      } else {
        pLo = Math.min(pLo, prime);
        pHi = Math.max(pHi, prime);
        eLo = Math.min(eLo, exponent);
        eHi = Math.max(eHi, exponent);
        eAbsHi = Math.max(eAbsHi, Math.abs(exponent));
      }
      var factor = Math.pow(prime, exponent);
      var logFactor = exponent * Math.log(prime);
      val *= factor;
      lnVal += logFactor;
      if (logFactor > 0) {
        num *= factor;
        lnNum += logFactor;
      }
      if (logFactor < 0) {
        denom *= Math.pow(prime, -exponent);  // Always use whole numbers if possible!
        lnDenom -= logFactor;
      }
    }
  }
  // Work out Liouville and Mobius function
  var liou = Math.pow(-1, cF);
  var mob = (cDF === cF) ? liou : 0;

  // If numerator and denominator are very large, value might still be modest
  if (!(Number.isFinite(num) && Number.isFinite(denom))) {
    // Check the final number will not exceed Number.MAX_VALUE
    if (Math.abs(lnVal) < 709) {
      val = Math.exp(lnVal);
    }
  }

  // Store results
  peo.n = {};
  var n = peo.n;
  n.v = val;
  n.n = num;
  n.d = denom;
  n.l = {};
  var l = n.l;
  l.v = lnVal;
  l.n = lnNum;
  l.d = lnDenom;
  n.s = {};
  var s = n.s;
  s.pLo = pLo;
  s.pHi = pHi;
  s.cF = cF;
  s.cDF = cDF;
  s.eLo = eLo;
  s.eHi = eHi;
  s.eAHi = eAbsHi;
  s.liou = liou;
  s.mob = mob;

  // Only give a text representation as a fraction if both num and denom less than 10^15
  var accuracyLimit = 34.539;      // Just over ln(10^15)
  if (lnNum < accuracyLimit && lnDenom < accuracyLimit) {
    var fractionText = (denom === 1) ? '' + num : num + '/' + denom;
    n.fTx = fractionText;
    n.rTx = fractionText;
  } else {
    n.fTx = 'NA';
    n.rTx = '10^' + Math.round(lnVal * 100 / Math.log(10)) * 0.01;  // 2 dps
  }
};

module.exports = setNumbers;
