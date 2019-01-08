var ibn = require('is-bounded-number');
var incrementFromIntegerPower = require('../setters/incrementFromIntegerPower');

var multiplyBySequence = function multiplyBySequence(thePeo, startNumInput, termsInput, jumpInput) {
  var startNum = startNumInput;
  var terms = termsInput;
  var jump = jumpInput;

  // multiplyBySequence(s) = multiplyBySequence(s, s) = multiplyBySequence(s, s, -1) = s * (s-1) * ... * 1
  // multiplyBySequence(s, t) = multiplyBySequence(s, t, -1) = s * (s-1) * ... * (s-(t-1))
  // multiplyBySequence(s, t, j) = s * (s+j) * ... * (s+j(t-1))
  // s, t, j ought all to be Integers
  // s, t ought to be positive. j ought to be non-zero

  // Check inputs are numbers
  if (!ibn(startNum)) startNum = 1;
  if (!ibn(terms)) terms = startNum;
  if (!ibn(jump)) jump = -1;

  // Force them all to integers
  startNum = Math.round(startNum);
  terms = Math.round(terms);
  jump = Math.round(jump);

  // Check ranges
  if (startNum < 1) startNum = 1;
  if (terms < 0) terms = startNum;  // if terms=0 then loop runs 0 times
  if (jump === 0) jump = -1;

  // Calculate end of terms
  var endNum = startNum + jump * (terms - 1);
  if (endNum < 1) endNum = 1;       // Prevent crossing 0 in the terms
  if (jump < 0) {
    // If jump is negative, negate jump and swap startNum and endNum
    // That way we're always counting up in the loop
    jump = -jump;
    var temp = endNum;
    endNum = startNum;
    startNum = temp;
  }

  // Increment thePeo according to each factor
  for (var i = startNum; i <= endNum; i = i + jump) {
    incrementFromIntegerPower(thePeo, i);
  }
  return thePeo;
};

module.exports = multiplyBySequence;
