var getBaseMult = require('../maths/getBaseMult')
var setLog = require('../setters/setLog')

var getLog = function(base) {
  setLog(this)
  return this.log.peo * getBaseMult(base)
}

module.exports = getLog
