var setNumbers = require('../../../setters/setNumbers');

var countFactors = function countFactors() {
  setNumbers(this);
  return this.n.s.cF;
};

module.exports = countFactors;
