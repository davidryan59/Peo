var chk = require('../../maths/checkNumber')
var isPrime = require('../../maths/isPrime')
var incrementFromIntegerPower = require('../../setters/incrementFromIntegerPower')

// Static method - 'this' is Peo
var prim = function(i, j) {
  // Primorial function
  // prim(i) calculates product of primes from 1 to i
  // prim(i, j) calculates product of primes from i to j

  // Check inputs are numbers
  if (!chk(i)) i = 1
  if (!chk(j)) j = 1

  // Force them all to integers
  i = Math.round(i)
  j = Math.round(j)

  // Check ranges
  if (i<1) i = 1
  if (j<1) j = 1
  if (j<i) {
    var temp = i
    i = j
    j = temp
  }

  // Start a new Peo for 1, increment it according to each factor
  var peo = new this()
  if (j<=1) return peo
  if (i<=2) incrementFromIntegerPower(peo, 2)
  // All other numbers to check are odd, can move i, j in to odd numbers
  if (i%2===0) i++
  if (j%2===0) j--

  // A more efficient implementation would be a sieve,
  // rather than running isPrime on every number in range
  for (var k=i; k<=j; k=k+2) {      // Search odd k for i<=k<=j.
    if (isPrime(k)) incrementFromIntegerPower(peo, k)
  }

  return peo
}

module.exports = prim
