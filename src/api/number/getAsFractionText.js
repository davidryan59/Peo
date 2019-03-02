var setNumbers = require('../../setters/setNumbers');

var getAsFractionText = function getAsFractionText() {
  setNumbers(this);
  return this.n.fTx;
};

module.exports = getAsFractionText;
