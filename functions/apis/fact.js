// Static method - 'this' is Peo
var fact = function(input) {
  // Calculate the factorial of input
  var peo = new this()
  if (!Number.isInteger(input)) return peo
  for (var i=2; i<=input; i++) {
    peo = peo.mult(new this(i))
  }
  return peo
}

module.exports = fact
