var getBaseMult = require('../../../maths/getBaseMult');
var setNumbers = require('../../../setters/setNumbers');

var getLog = function getLog(base) {
  setNumbers(this);
  return this.n.l.v * getBaseMult(base);
};

module.exports = getLog;
