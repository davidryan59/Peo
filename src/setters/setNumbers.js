var setNumbers = function setNumbers(peo) {
  // Exit if already set
  if (peo.number) return;

  // Calculate many things from the primes and their exponents
  var val = 1;
  var num = 1;
  var denom = 1;
  var lnVal = 0;
  var lnNum = 0;
  var lnDenom = 0;
  var pLo = 0;
  var pHi = 0;
  var cF = 0;
  var cDF = 0;
  var eLo = null;   // exponent could be +/-
  var eHi = null;   // exponent could be +/-
  var eAbsHi = 0;
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
      pLo = (pLo) ? Math.min(pLo, prime) : prime;
      pHi = Math.max(pHi, prime);
      eLo = (eLo !== null) ? Math.min(eLo, exponent) : exponent;
      eHi = (eHi !== null) ? Math.max(eHi, exponent) : exponent;
      eAbsHi = Math.max(eAbsHi, Math.abs(exponent));
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

  // Store results
  peo.number = {};
  peo.number.val = val;
  peo.number.n = num;
  peo.number.d = denom;
  peo.number.ln = {};
  peo.number.ln.val = lnVal;
  peo.number.ln.n = lnNum;
  peo.number.ln.d = lnDenom;
  peo.number.stats = {};
  peo.number.stats.pLo = pLo;
  peo.number.stats.pHi = pHi;
  peo.number.stats.cF = cF;
  peo.number.stats.cDF = cDF;
  peo.number.stats.eLo = eLo;
  peo.number.stats.eHi = eHi;
  peo.number.stats.eAbsHi = eAbsHi;
  peo.number.stats.liou = liou;
  peo.number.stats.mob = mob;

  // Only give a text representation as a fraction if both num and denom less than 10^15
  var accuracyLimit = 34.539;      // Just over ln(10^15)
  if (lnNum < accuracyLimit && lnDenom < accuracyLimit) {
    var fractionText = (denom === 1) ? '' + num : num + '/' + denom;
    peo.number.fracTxt = fractionText;
    peo.number.resTxt = fractionText;
  } else {
    peo.number.fracTxt = 'NA';
    peo.number.resTxt = '10^' + Math.round(lnVal * 100 / Math.log(10)) * 0.01;  // 2 dps
  }
};

module.exports = setNumbers;
