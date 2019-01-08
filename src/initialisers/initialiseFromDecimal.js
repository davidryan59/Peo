var initialiseFromNumAndDenom = require('./initialiseFromNumAndDenom');

var initialiseFromDecimal = function initialiseFromDecimal(peo, decimalNumber, powerInput) {
  // decimalNumber is bounded. Check it is also positive
  if (decimalNumber <= 0) return;

  var fudgeFactor = 3 * 3 * 7 * 11 * 13 * 1000;   // 9,009,000
  // IMPROVE. This does not work for all decimals. Fix it, maybe using continued fractions.
  var tryInt = Math.round(decimalNumber * fudgeFactor);
  initialiseFromNumAndDenom(peo, tryInt, fudgeFactor, powerInput);
};

module.exports = initialiseFromDecimal;
