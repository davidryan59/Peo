var chk = require('./checkNumber')

var getBaseMult = function(base) {
  return (base===undefined || !chk(base) || base<=1) ? 1 : 1/Math.log(base)
}

module.exports = getBaseMult
