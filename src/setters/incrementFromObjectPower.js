var ibn = require('is-bounded-number');
var pf = require('primes-and-factors');

var checkPower = require('../maths/checkPower');
var incrementPrimeExp = require('./incrementPrimeExp');
var incrementFromIntegerPower = require('./incrementFromIntegerPower');

var incrementFromObjectPower = function incrementFromObjectPower(peo, obj, powerInput) {
  // obj of form {p1:e1, p2:e2, ... , pk:ek}
  // Will reconstruct obj into peo, but only the
  // keys that are primes, and the
  // values that are integers

  // If power is 0, return.
  // Otherwise, if it's an integer, leave it alone, or else default to 1
  var power = checkPower(powerInput);
  if (!power) return;

  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];                    // key is a string
    var value = obj[key];
    // both key and value are string,
    // turn them into integers (NaN if anything goes wrong)
    var number = Number.parseInt(key, 10);       // NaN if anything goes wrong
    var exponent = Number.parseInt(value, 10);
    if (ibn(number) && ibn(exponent) && number >= 2) {
      if (pf.isPrime(number)) {
        incrementPrimeExp(peo, number, exponent * power);
      } else {
        incrementFromIntegerPower(peo, number, exponent * power);
      }
    }
  }
};

module.exports = incrementFromObjectPower;
