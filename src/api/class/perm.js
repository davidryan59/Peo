var multiplyBySequence = require('../../setters/multiplyBySequence');

// Static method - 'this' is Peo
var perm = function perm( n, r ) {
  var newPeo = new this();
  multiplyBySequence(newPeo, n, r);
  return newPeo;
};

module.exports = perm;
