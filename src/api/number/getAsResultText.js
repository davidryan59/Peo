var setNumbers = require('../../setters/setNumbers');

var getAsResultText = function getAsResultText() {
  setNumbers(this);
  return this.n.rTx;
};

module.exports = getAsResultText;
