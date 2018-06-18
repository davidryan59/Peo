var chk = require('../maths/checkNumber')
var setLog = require('../setters/setLog')

var log = function(base) {

    // Check base is a number greater than 1
    if (base===undefined || !chk(base) || base<=1) base = Math.E
    // base is now a number greater than 1
    var logBaseReciprocal = 1/Math.log(base)

    ;(this.naturalLog === null) ? setLog(this) : null
    return this.naturalLog * logBaseReciprocal

}

module.exports = log
