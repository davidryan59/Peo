var setNumbers = require('../../setters/setNumbers');

var getAsResultText = function getAsResultText() {
  setNumbers(this);
  return this.number.resTxt;
};

module.exports = getAsResultText;
