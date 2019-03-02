var setNumbers = require('../../../setters/setNumbers');

var getLiouville = function getLiouville() {
  setNumbers(this);
  return this.n.s.liou;
};

module.exports = getLiouville;
