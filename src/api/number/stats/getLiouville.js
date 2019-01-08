var setNumbers = require('../../../setters/setNumbers');

var getLiouville = function getLiouville() {
  setNumbers(this);
  return this.number.stats.liou;
};

module.exports = getLiouville;
