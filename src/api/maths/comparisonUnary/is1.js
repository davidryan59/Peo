// A peo is equal to 1 if either it has no primes / exponents,
// or the exponent of every prime is 1 (edge case, since these should be eliminated)
var is1 = function is1() {
  // Slightly longer method than lessThan1
  // in order to bypass the statistics calculation
  var thisExps = this.getPrimeExps();
  var thisKeys = Object.keys(thisExps);
  for (var i = 0; i < thisKeys.length; i++) {
    var theKey = thisKeys[i];
    if (thisExps[theKey] !== 0) return false;
  }
  return true;
};

module.exports = is1;
