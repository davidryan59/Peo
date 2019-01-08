var amendPrimeExponent = require('./amendPrimeExponent');

var incrementPrimeExp = function incrementPrimeExp(peo, prime, exponent) {
  var currentPrimeExp = peo.getPrimeExp(prime);
  amendPrimeExponent(peo, prime, currentPrimeExp + exponent);
};

module.exports = incrementPrimeExp;
