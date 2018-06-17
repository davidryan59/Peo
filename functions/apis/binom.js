// Static method - 'this' is Peo
var binom = function(n, r) {
  // Calculate the binomial coefficient (n choose r)
  var nFact = this.fact(n)
  var rFact = this.fact(r)
  var nrFact = this.fact(n-r)
  return nFact.mult(rFact, -1).mult(nrFact, -1)
}

module.exports = binom
