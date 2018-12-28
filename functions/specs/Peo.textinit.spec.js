var assert = require('assert')
var Peo = require('../Peo')

describe('Initialise Peo from fraction in text form', function() {

  var testArray = [
    ["1", {}, ""],
    ["2", {2:1}, ""],
    ["2310", {2:1,3:1,5:1,7:1,11:1}, ""],
    ["83521", {17:4}, ""],
    ["1275120", {2:4,3:2,5:1,7:1,11:1,23:1}, ""],

    ["1/1", {}, ""],
    ["2/1", {2:1}, ""],
    ["2310/1", {2:1,3:1,5:1,7:1,11:1}, ""],
    ["83521/1", {17:4}, ""],
    ["1275120/1", {2:4,3:2,5:1,7:1,11:1,23:1}, ""],

    ["1/7", {7:-1}, ""],
    ["1/1001", {7:-1,11:-1,13:-1}, ""],
    ["1/126000", {2:4,3:2,5:3,7:1}, ""],
    
    ["3/2", {2:-1,3:1}, ""],
    ["360/240", {2:-1,3:1}, ""],               // GCD = 120
    ["77/65", {5:-1,7:1,11:1,13:-1}, ""],
    ["1001/845", {5:-1,7:1,11:1,13:-1}, ""],   // GCD = 13
    ["81/40", {2:3,3:4,5:-1}, ""],
    ["92400/8645", {2:4,3:1,5:(2-1),7:(1-1),11:1,13:-1,19:-1}, ""],

    ["", {}, "empty string"]
  ]

  var runTest = function(textToParse, objectToCompare, comment) {
    var peoFromParsing = new Peo(textToParse)
    var peoFromObject = new Peo(objectToCompare)
    var expsFromParsing = peoFromParsing.getPrimeExps()
    var expsFromObject = peoFromObject.getPrimeExps()
    var objectText = JSON.stringify(expsFromObject)
    var commentText = (comment) ? ", " + comment : ""
    var label = "new Peo(\"" + textToParse + "\") has prime exponents " + objectText + commentText
    it(label, function() {assert.deepStrictEqual(expsFromParsing, expsFromObject)})
  }

  for (var i=0; i<testArray.length; i++) {
    runTest(testArray[i][0], testArray[i][1], testArray[i][2])
  }

})
