var assert = require('assert')
var Peo = require('../Peo.js')

describe("The Peo class", function() {

  var runTest = function(input, output) {
    var po = new Peo(input)
    var actualResult = JSON.stringify(po)
    var expectedResult = output
    var label = "new Peo(" + input + ") returns " + JSON.stringify(expectedResult)
    it(label, function() {
      assert.deepStrictEqual(actualResult, expectedResult)
    })
  }

  var testArray = [
    [5, {5:1}]
  , [12, {2:2, 3:1}]
  , [[3, 2], {2:1, 3:-1}]
  ]

  for (var i=0; i<testArray.length; i++) {
    runTest(testArray[i][0], testArray[i][1])
  }

})
