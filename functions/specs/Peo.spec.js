var assert = require('assert')
var Peo = require('../Peo.js')

describe("The Peo class", function() {

  var runTest = function(input, output) {
    var po = new Peo(input)
    var actualResult = po
    var expectedResult = output
    var label = "new Peo(" + input + ") returns " + expectedResult
    it(label, function() {
      assert.deepStrictEquals(expectedResult, actualResult)
    })
  }

  var testArray = [
    [5, {5:1}]
  , [12, {2:2, 3:1}]
  , [[3, 2], {2:1, 3:-1}]
  ]

  // Run all of these test cases
  for (var i=0; i<testArray.length; i++) {
    runTest(testArray[i][0], testArray[i][1])
  }

})
