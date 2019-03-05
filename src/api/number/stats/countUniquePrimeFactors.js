var setNumbers = require('../../../setters/setNumbers');

var countUniquePrimeFactors = function countUniquePrimeFactors() {
  setNumbers(this);
  return this.n.s.cUPF;
};

module.exports = countUniquePrimeFactors;
