var initialise = require('./initialisers/initialise')

// Peo class constructor
function Peo() {
  // This object must be immutable and completely determine the Peo output
  this.p = {}
  // Initialise the Peo
  initialise(this, arguments)
}

// Instance methods
Peo.prototype.get1 = require('./api/get1')
Peo.prototype.copy = require('./api/copy')
Peo.prototype.mult = require('./api/mult')
Peo.prototype.pow = require('./api/pow')
Peo.prototype.getFraction = require('./api/number/getFraction')
Peo.prototype.getVal = require('./api/number/getVal')
Peo.prototype.getNum = require('./api/number/getNum')
Peo.prototype.getDenom = require('./api/number/getDenom')
Peo.prototype.getLog = require('./api/number/ln/getLog')
Peo.prototype.getLogNum = require('./api/number/ln/getLogNum')
Peo.prototype.getLogDenom = require('./api/number/ln/getLogDenom')
Peo.prototype.getText = require('./api/getText')
Peo.prototype.toString = require('./api/toString')
Peo.prototype.getPrimeExp = require('./api/getPrimeExp')
Peo.prototype.getPrimeExps = require('./api/getPrimeExps')
Peo.prototype.checkPrimeExps = require('./api/checkPrimeExps')

// Static methods
Peo.fact = require('./apis/fact')
Peo.prim = require('./apis/prim')
Peo.binom = require('./apis/binom')

module.exports = Peo
