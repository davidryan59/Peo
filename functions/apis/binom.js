// Static method - 'this' is Peo
var binom = function(n, r) {
  // Calculate the binomial coefficient (n choose r)
  var nPeo = this.fact(n, r)      // n * (n-1) * ... * (n-r+1)
  var dPeo = this.fact(r)         // 1 * 2 * ... * r
  return nPeo.mult(dPeo, -1)
}

module.exports = binom
