// Static method - 'this' is Peo
var fact = function(input, terms) {
  // fact(i) calculates factorial of i
  // fact(i, t) calculates just the t largest terms of fact(i)
  var peo = new this()
  if (!Number.isInteger(input) || input<2) return peo
  if (terms===undefined) terms = input
  if (!Number.isInteger(terms) || terms<1) return peo
  if (terms > input) terms = input
  for (var t=0; t<terms; t++) {
    peo = peo.mult(new this(input-t))
  }
  return peo
}

module.exports = fact
