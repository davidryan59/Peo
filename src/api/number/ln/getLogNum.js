var getBaseMult = require('../../../maths/getBaseMult');
var setNumbers = require('../../../setters/setNumbers');

var getLogNum = function getLogNum(base) {
  setNumbers(this);
  return this.n.l.n * getBaseMult(base);
};

module.exports = getLogNum;
