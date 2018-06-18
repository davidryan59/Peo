var getBaseMult = require('../maths/getBaseMult')
var setLog = require('../setters/setLog')

var getLogNum = function(base) {
  setLog(this)
  return this.log.num * getBaseMult(base)
}

module.exports = getLogNum
