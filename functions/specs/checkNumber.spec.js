var assert = require('assert')
var chk = require('../maths/checkNumber')

describe("checkNumber", function() {

  var runTest = function(input, expectedResult) {
    var actualResult = chk(input)
    var label = "chk(" + input + ") returns " + expectedResult
    it(label, function() {
      assert.strictEqual(actualResult, expectedResult)
    })
  }

  var testArray = [
    [0, true]
  , [1, true]
  , [42.001011, true]
  , [-172738, true]
  , [-1/7070707077, true]
  , [1e15, true]
  , [-1e15, true]
  , [1e15+1, false]       // Internal limit is set to 1e9 for acceptance
  , [-1e15-1, false]
  , [1e20, false]
  , ['aString', false]
  , [Infinity, false]
  , [0-Infinity, false]
  , [NaN, false]
  , [0-NaN, false]
  , [null, false]
  , [true, false]
  , [undefined, false]
  , [[1, 2, 3], false]
  , ["1", false]
  , [{1:2}, false]
  ]

  for (var i=0; i<testArray.length; i++) {
    runTest(testArray[i][0], testArray[i][1])
  }

})
