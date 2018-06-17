var initialise = require('./initialisers/initialise')

var setFraction = require('./setters/setFraction')

var mult = require('./api/mult')
var getText = require('./api/getText')
var getFraction = require('./api/getFraction')
var getPrimeExp = require('./api/getPrimeExp')
var getPrimeExps = require('./api/getPrimeExps')
var checkPrimeExps = require('./api/checkPrimeExps')

// Here's the Peo class
function Peo() {

  // Set up structure
  this.p = {}              // This is the main data store. Its going to be set with primes and exponents
  this.fr = null           // Going to set a Fraction in here later (small only)
  this.txt = ""            // Going to set some descriptive text here later

  // Initialise from arguments
  initialise(this, arguments)

}

// Do the copy function here, it requires the constructor
Peo.prototype.copy = function() {
  // Start with a new Peo representing 1/1
  var copyPeo = new Peo()
  // Assign it a copy of the prime exponent information, which contains all relevant info
  copyPeo.p = Object.assign({}, this.p)
  // Doing it this way because this.p is already trusted,
  // don't want to have to check every key is prime again, could be costly
  return copyPeo
}

// From API folder
Peo.prototype.mult = mult
Peo.prototype.getText = getText
Peo.prototype.getFraction = getFraction
Peo.prototype.getPrimeExp = getPrimeExp
Peo.prototype.getPrimeExps = getPrimeExps
Peo.prototype.checkPrimeExps = checkPrimeExps
Peo.prototype.toString = function() {return this.getText()}

module.exports = Peo
