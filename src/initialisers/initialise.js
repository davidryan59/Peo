var ibn = require('is-bounded-number');
var isString = require('is-string');

var incrementFromObjectPower = require('../setters/incrementFromObjectPower');
var initialiseFromNumAndDenom = require('./initialiseFromNumAndDenom');
var initialiseFromDecimal = require('./initialiseFromDecimal');

var digits = 15;
var cutOff = Math.pow(10, digits);
var searchForDigits = '[0-9]{1,' + digits + '}';
var regexIntegerString = new RegExp('^' + searchForDigits + '$');
var regexFractionString = new RegExp('^' + searchForDigits + '\\/' + searchForDigits + '$');

var initialise = function initialise(peo, args) {
  // Also see peo.construct function on API
  // Only the first 3 arguments are used
  // Get the first few arguments given to Peo constructor
  var arg0 = args[0];
  var arg1 = args[1];
  var arg2 = args[2];

  // Case: new Peo(peo, power)
  // Have to use peo.constructor, rather than Peo
  if (arg0 instanceof peo.constructor) {
    // arg0.p is an object, from which we can increment peo
    incrementFromObjectPower(peo, arg0.p, arg1);
    return;
  }

  // Case: new Peo(a, b, c) where a is an integer => (a/b)^c
  if (Number.isInteger(arg0)) {
    initialiseFromNumAndDenom(peo, arg0, arg1, arg2);
    return;
  }

  // Case: new Peo(d, c) where d is a decimal number, c is a power, for d^c
  if (ibn(arg0, cutOff)) {
    initialiseFromDecimal(peo, arg0, arg1);
    return;
  }

  // Case arg0 is string "NNN"
  // and arg1 is an optional power
  // Note: .search is 0 if match (at start), -1 if no match
  if (isString(arg0) && arg0.search(regexIntegerString) === 0) {
    var theInt = Number.parseInt(arg0, 10);
    initialiseFromNumAndDenom(peo, theInt, 1, arg1);
    return;
  }

  // Case arg0 is string "MMM/NNN"
  // and arg1 is an optional power
  if (isString(arg0) && arg0.search(regexFractionString) === 0) {
    var splitArray = arg0.split(/\//);
    var theNum = Number.parseInt(splitArray[0], 10);
    var theDenom = Number.parseInt(splitArray[1], 10);
    initialiseFromNumAndDenom(peo, theNum, theDenom, arg1);
    return;
  }

  // Case arg0 is string "NNN.NNN", arg1 an optional power
  // Must be processed after "NNN" and "NNN/NNN",
  // since parseFloat parses the latter incorrectly!
  var testNum = Number.parseFloat(arg0);
  if (ibn(testNum, cutOff)) {
    initialiseFromDecimal(peo, testNum, arg1);
    return;
  }

  // Need to do this check last, since its 'object', the most general!
  if (typeof arg0 === 'object' && arg0 !== null) {
    if (arg0.num) {
      // Case 'new Peo({num:a, denom:b, pow:c})'
      initialiseFromNumAndDenom(peo, arg0.num, arg0.denom, arg0.pow);
      return;
    }
    // Default object case 'new Peo({p1:e1, ...,pk:ek}, n)'
    incrementFromObjectPower(peo, arg0, arg1);
    return;
  }
};

module.exports = initialise;
