var incrementFromIntegerPower = require('../../setters/incrementFromIntegerPower');
var incrementFromObjectPower = require('../../setters/incrementFromObjectPower');

var split = function split() {
  // Accepts a variable number of arguments
  // Will return an Array with that number of arguments + 1 entries
  // For each argument, split out the pi^ei that it describes
  // Then in the final position, return whatever is left.

  var len = arguments.length;
  var resultArray = new Array(len + 1);

  var peoToSplit = this.copy();  // Copy to split
  resultArray[len] = peoToSplit;
  for (var i = 0; i < len; i++) {
    var arg = arguments[i];
    var addPeo = this.get1();    // Peo = 1
    resultArray[i] = addPeo;
    if (Number.isInteger(arg)) {
      // We've got a number!
      var exp = peoToSplit.getPrimeExp(arg);
      if (exp) {
        // arg^exp is a factor of peoToSplit
        // Split it out!
        incrementFromIntegerPower(peoToSplit, arg, -exp);
        incrementFromIntegerPower(addPeo, arg, exp);
      }
    } else if (Array.isArray(arg)) {
      var splitObj = {};
      for (var j = 0; j < arg.length; j++) {
        var arg2 = arg[j];
        if (Number.isInteger(arg2)) {
          var exp2 = peoToSplit.getPrimeExp(arg2);
          if (exp2) {
            splitObj[arg2] = exp2;
          }
        }
      }
      incrementFromObjectPower(peoToSplit, splitObj, -1);
      incrementFromObjectPower(addPeo, splitObj);
    }
  }
  return resultArray;
};

module.exports = split;
