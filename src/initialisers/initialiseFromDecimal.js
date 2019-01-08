var initialiseFromNumAndDenom = require('./initialiseFromNumAndDenom');
var decimalToFraction = require('../maths/decimalToFraction');

var initialiseFromDecimal = function initialiseFromDecimal(peo, decimalNumber, powerInput) {
  // decimalNumber is bounded. Check it is also positive
  if (decimalNumber <= 0) return;
  var fractionArray = decimalToFraction(decimalNumber);
  initialiseFromNumAndDenom(peo, fractionArray[0], fractionArray[1], powerInput);
};

module.exports = initialiseFromDecimal;
