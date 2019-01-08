var setNumbers = require('../../../setters/setNumbers');

var getHighestExp = function getHighestExp() {
  setNumbers(this);
  return this.number.stats.eHi;
};

module.exports = getHighestExp;
