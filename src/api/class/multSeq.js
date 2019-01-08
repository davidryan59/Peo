var multiplyBySequence = require('../../setters/multiplyBySequence');

// Static method - 'this' is Peo
var multSeq = function multSeq( startNum, numTerms, jump ) {
  var newPeo = new this();
  multiplyBySequence(newPeo, startNum, numTerms, jump);
  return newPeo;
};

module.exports = multSeq;
