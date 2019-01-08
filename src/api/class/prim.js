var multiplyByPrimesInRange = require('../../setters/multiplyByPrimesInRange');

// Static method - 'this' is Peo
var prim = function prim( n ) {
  var newPeo = new this();
  multiplyByPrimesInRange(newPeo, n);
  return newPeo;
};

module.exports = prim;
