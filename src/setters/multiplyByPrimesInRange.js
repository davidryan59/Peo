var ibn = require('is-bounded-number');
var pf = require('primes-and-factors');
var incrementFromIntegerPower = require('../setters/incrementFromIntegerPower');

var multiplyByPrimesInRange = function multiplyByPrimesInRange(thePeo, iInput, jInput) {
  var i = iInput;
  var j = jInput;
  // Primorial function
  // multiplyByPrimesInRange(i) calculates product of primes from 1 to i
  // multiplyByPrimesInRange(i, j) calculates product of primes from i to j

  // Check inputs are numbers
  if (!ibn(i)) i = 1;
  if (!ibn(j)) j = 1;

  // Check ranges
  if (i < 1) i = 1;
  if (j < 1) j = 1;
  if (j < i) {
    var temp = i;
    i = j;
    j = temp;
  }
  // Now i<=j. Force them to integers; round inwards.
  i = Math.ceil(i);
  j = Math.floor(j);

  // Increment thePeo according to each factor
  if (j <= 1) return thePeo;
  if (i <= 2) incrementFromIntegerPower(thePeo, 2);
  // All other numbers to check are odd, can move i, j in to odd numbers
  if (i % 2 === 0) i++;
  if (j % 2 === 0) j--;

  // A more efficient implementation would be a sieve,
  // rather than running isPrime on every number in range
  for (var k = i; k <= j; k = k + 2) {      // Search odd k for i<=k<=j.
    if (pf.isPrime(k)) incrementFromIntegerPower(thePeo, k);
  }

  return thePeo;
};

module.exports = multiplyByPrimesInRange;
