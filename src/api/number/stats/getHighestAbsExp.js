var setNumbers = require('../../../setters/setNumbers');

var getHighestAbsExp = function getHighestAbsExp() {
  setNumbers(this);
  return this.number.stats.eAbsHi;
};

module.exports = getHighestAbsExp;
