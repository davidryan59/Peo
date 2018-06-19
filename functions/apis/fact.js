var incrementFromIntegerPower = require('../setters/incrementFromIntegerPower')

// Static method - 'this' is Peo
var fact = function(input, terms) {
  // fact(i) calculates factorial of i
  // fact(i, t) calculates just the t largest terms of fact(i)
  var peo = new this()
  if (!Number.isInteger(input) || input<2) return peo
  if (terms===undefined) terms = input
  if (!Number.isInteger(terms) || terms<1) return peo
  if (terms >= input) terms = input - 1   // e.g. 5! requires 5-1=4 terms; 5*4*3*2
  for (var t=0; t<terms; t++) {
    // // Original: Creates lots of new objects, which are never used again
    // peo = peo.mult(new this(input-t))

    // Optimised: Amends one object until its finished, then returns it
    incrementFromIntegerPower(peo, input-t)
  }
  return peo
}

module.exports = fact
