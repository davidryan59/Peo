var setNumbers = require('../../setters/setNumbers');

var getAsFractionText = function getAsFractionText() {
  setNumbers(this);
  return this.number.fracTxt;
};

module.exports = getAsFractionText;
