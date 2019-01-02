var assert = require('assert');

var index = require('./index');
var Peo = index.Peo;

describe('Initialise Peo from fraction in text form', function() {

  var testArray = [
    ["1", 1, {}, ""],           // Integers in form "N"
    ["2", 1, {2:1}, ""],
    ["2310", 1, {2:1,3:1,5:1,7:1,11:1}, ""],
    ["83521", 1, {17:4}, ""],
    ["1275120", 1, {2:4,3:2,5:1,7:1,11:1,23:1}, ""],

    ["1/1", 1, {}, ""],         // Integers in form "N/1"
    ["2/1", 1, {2:1}, ""],
    ["2310/1", 1, {2:1,3:1,5:1,7:1,11:1}, ""],
    ["83521/1", 1, {17:4}, ""],
    ["1275120/1", 1, {2:4,3:2,5:1,7:1,11:1,23:1}, ""],

    ["1/7", 1, {7:-1}, ""],         // Reciprocals in form "1/N"
    ["1/1001", 1, {7:-1,11:-1,13:-1}, ""],
    ["1/126000", 1, {2:-4,3:-2,5:-3,7:-1}, ""],

    ["3/2", 1, {2:-1,3:1}, ""],     // Fractions in form "N/M"
    ["360/240", 1, {2:-1,3:1}, ""],               // GCD = 120
    ["77/65", 1, {5:-1,7:1,11:1,13:-1}, ""],
    ["1001/845", 1, {5:-1,7:1,11:1,13:-1}, ""],   // GCD = 13
    ["81/40", 1, {2:-3,3:4,5:-1}, ""],
    ["92400/8645", 1, {2:4,3:1,5:(2-1),7:(1-1),11:1,13:-1,19:-1}, ""],

    ["2", 2, {2:2}, ""],          // Test with 2nd argument an integer power
    ["7", -399, {7:-399}, ""],
    ["16/3", 23, {2:92,3:-23}, ""],
    ["77/65", 100, {5:-100,7:100,11:100,13:-100}, ""],

    ["", 1, {}, "empty string"]
  ]

  var runTest = function(textToParse, power, objectToCompare, comment) {
    var peoFromParsing = new Peo(textToParse, power)
    var peoFromObject = new Peo(objectToCompare)
    var expsFromParsing = peoFromParsing.getPrimeExps()
    var expsFromObject = peoFromObject.getPrimeExps()
    var objectText = JSON.stringify(expsFromObject)
    var commentText = (comment) ? ", " + comment : ""
    var label = "new Peo(\"" + textToParse + "\") has prime exponents " + objectText + commentText
    it(label, function() {assert.deepStrictEqual(expsFromParsing, expsFromObject)})
  }

  for (var i=0; i<testArray.length; i++) {
    runTest(testArray[i][0], testArray[i][1], testArray[i][2], testArray[i][3])
  }

})
