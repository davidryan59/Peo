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
Peo.prototype.split = require('./api/maths/split')

// Numeric values
Peo.prototype.getDenom = require('./api/number/getDenom')
Peo.prototype.getNum = require('./api/number/getNum')
Peo.prototype.getText = require('./api/number/getText')
Peo.prototype.getVal = require('./api/number/getVal')

// Logarithmic numeric values
Peo.prototype.getLog = require('./api/number/ln/getLog')
Peo.prototype.getLogDenom = require('./api/number/ln/getLogDenom')
Peo.prototype.getLogNum = require('./api/number/ln/getLogNum')

// Numeric stats
Peo.prototype.countDistinctFactors = require('./api/number/stats/countDistinctFactors')
Peo.prototype.countFactors = require('./api/number/stats/countFactors')
Peo.prototype.getHighestAbsExp = require('./api/number/stats/getHighestAbsExp')
Peo.prototype.getHighestExp = require('./api/number/stats/getHighestExp')
Peo.prototype.getHighestPrime = require('./api/number/stats/getHighestPrime')
Peo.prototype.getLiouville = require('./api/number/stats/getLiouville')
Peo.prototype.getLowestExp = require('./api/number/stats/getLowestExp')
Peo.prototype.getLowestPrime = require('./api/number/stats/getLowestPrime')
Peo.prototype.getMobius = require('./api/number/stats/getMobius')


module.exports = Peo
