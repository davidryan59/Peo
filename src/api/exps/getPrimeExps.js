var getPrimeExps = function getPrimeExps( arrayOfPrimes ) {
  // If arrayOfPrimes is omitted, return the whole of (a copy of) this.p
  // Otherwise, return just specific primes.

  var primeObject = this.p;
  var result = {};

  if (!arrayOfPrimes) {
    // Result is a copy of the whole prime object
    Object.assign(result, primeObject);
  } else {
    // Result is a copy of only the specified primes
    // Will include zero indices (unlike this.p)
    for (var i = 0; i < arrayOfPrimes.length; i++) {
      var prime = arrayOfPrimes[i];
      var value = primeObject[prime] || 0;
      result[prime] = value;
    }
  }

  return result;
};

module.exports = getPrimeExps;
