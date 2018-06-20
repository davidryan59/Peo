var chk = require('../../maths/checkNumber')
var incrementFromIntegerPower = require('../../setters/incrementFromIntegerPower')

// Static method - 'this' is Peo
var fact = function(startNum, terms, jump) {
  // fact(s) = fact(s, s) = fact(s, s, -1) = s * (s-1) * ... * 1
  // fact(s, t) = fact(s, t, -1) = s * (s-1) * ... * (s-(t-1))
  // fact(s, t, j) = s * (s+j) * ... * (s+j(t-1))
  // s, t, j ought all to be Integers
  // s, t ought to be positive. j ought to be non-zero

  // Check inputs are numbers
  if (!chk(startNum)) startNum = 1
  if (!chk(terms)) terms = startNum
  if (!chk(jump)) jump = -1

  // Force them all to integers
  startNum = Math.round(startNum)
  terms = Math.round(terms)
  jump = Math.round(jump)

  // Check ranges
  if (startNum<1) startNum = 1
  if (terms<0) terms = startNum  // if terms=0 then loop runs 0 times
  if (jump===0) jump = -1

  // Calculate end of terms
  var endNum = startNum + jump * (terms-1)
  if (endNum<1) endNum = 1       // Prevent crossing 0 in the terms
  if (jump<0) {
    // If jump is negative, negate jump and swap startNum and endNum
    // That way we're always counting up in the loop
    jump = -jump
    var temp = endNum
    endNum = startNum
    startNum = temp
  }

  // Start a new Peo for 1, increment it according to each factor
  var peo = new this()
  for (var i=startNum; i<=endNum; i=i+jump) {
    incrementFromIntegerPower(peo, i)
  }
  return peo
}

module.exports = fact
