// Static method - 'this' is Peo
var power = function(peo, power) {
  // Do the mult function, starting from an empty new Peo representing 1
  return (new this()).mult(peo, power)
}

module.exports = power
