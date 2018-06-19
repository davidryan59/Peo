var isPrime = require('../maths/isPrime')
var incrementFromIntegerPower = require('../setters/incrementFromIntegerPower')

// Static method - 'this' is Peo
var prim = function(j, i) {
  // prim(i) calculates primorial of j, product of primes p <= j
  // prim(i, j) calculates product of primes i <= p <= j
  var peo = new this()
  if (!Number.isInteger(j) || j<2) return peo
  if (i===undefined || !Number.isInteger(i) || i<2) i = 2
  if (i > j) i = j
  if (i===2) incrementFromIntegerPower(peo, 2)
  if (i%2===0) i++

  // A more efficient implementation would be a sieve,
  // rather than running isPrime on every number in range
  for (var k=i; k<=j; k=k+2) {      // Search odd k for i<=k<=j.
    if (isPrime(k)) incrementFromIntegerPower(peo, k)
  }

  return peo
}

module.exports = prim
