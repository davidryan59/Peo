var ibn = require('is-bounded-number')

var getBaseMult = function(base) {
  return (base===undefined || !ibn(base) || base<=1) ? 1 : 1/Math.log(base)
}

module.exports = getBaseMult
