var initialise = require('./initialisers/initialise')

var mult = require('./api/mult')
var getText = require('./api/getText')
var toString = require('./api/toString')
var getFraction = require('./api/getFraction')
var getPrimeExp = require('./api/getPrimeExp')
var getPrimeExps = require('./api/getPrimeExps')
var checkPrimeExps = require('./api/checkPrimeExps')

// Peo class constructor
function Peo() {
  // Control of Peo is here
  this.p = {}
  // Cached info to speed up Peo is here. Each value should start off falsey.
  this.fr = null
  this.txt = ""
  // Initialise from various arguments
  initialise(this, arguments)
}

// Do the copy function here since it requires the constructor
Peo.prototype.copy = function() {
  // Start with a new Peo representing 1/1
  var copyPeo = new Peo()
  // Assign it a copy of the prime exponent information, which contains all relevant info
  copyPeo.p = Object.assign({}, this.p)
  // Doing it this way because this.p is already trusted,
  // don't want to have to check every key is prime again, could be costly
  return copyPeo
}

// Setup the public API
Peo.prototype.mult = mult
Peo.prototype.getText = getText
Peo.prototype.toString = toString
Peo.prototype.getFraction = getFraction
Peo.prototype.getPrimeExp = getPrimeExp
Peo.prototype.getPrimeExps = getPrimeExps
Peo.prototype.checkPrimeExps = checkPrimeExps

module.exports = Peo
