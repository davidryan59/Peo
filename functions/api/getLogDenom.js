var getBaseMult = require('../maths/getBaseMult')
var setLog = require('../setters/setLog')

var getLogDenom = function(base) {
  setLog(this)
  return this.log.denom * getBaseMult(base)
}

module.exports = getLogDenom
