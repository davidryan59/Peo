var initialise = require('./initialisers/initialise')


// Peo class constructor
function Peo() {
  // This object must be immutable and completely determine the Peo output
  this.p = {}
  // Initialise the Peo
  initialise(this, arguments)
}


// Static or Class methods
Peo.fact = require('./api/class/fact')
Peo.prim = require('./api/class/prim')
Peo.binom = require('./api/class/binom')


// --------- Instance methods ---------

// Access to prime exponents
Peo.prototype.checkPrimeExps = require('./api/exps/checkPrimeExps')
Peo.prototype.getPrimeExp = require('./api/exps/getPrimeExp')
Peo.prototype.getPrimeExps = require('./api/exps/getPrimeExps')

// General
Peo.prototype.copy = require('./api/general/copy')
Peo.prototype.toString = require('./api/general/toString')

// Maths operations
Peo.prototype.get1 = require('./api/maths/get1')
Peo.prototype.mult = require('./api/maths/mult')
Peo.prototype.pow = require('./api/maths/pow')

// Numeric values
Peo.prototype.getDenom = require('./api/number/getDenom')
Peo.prototype.getFraction = require('./api/number/getFraction')
Peo.prototype.getNum = require('./api/number/getNum')
Peo.prototype.getText = require('./api/number/getText')
Peo.prototype.getVal = require('./api/number/getVal')

// Logarithmic numeric values
Peo.prototype.getLog = require('./api/number/ln/getLog')
Peo.prototype.getLogDenom = require('./api/number/ln/getLogDenom')
Peo.prototype.getLogNum = require('./api/number/ln/getLogNum')


module.exports = Peo
