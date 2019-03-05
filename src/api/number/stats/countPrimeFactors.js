var setNumbers = require('../../../setters/setNumbers');

var countPrimeFactors = function countPrimeFactors() {
  setNumbers(this);
  return this.n.s.cPF;
};

module.exports = countPrimeFactors;
