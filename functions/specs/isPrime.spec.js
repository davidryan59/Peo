var assert = require('assert')
var isPrime = require('../maths/isPrime')

describe("isPrime", function() {

  var primeArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 89, 97, 101, 127, 1979, 65537]
  var nonPrimeArray = [null, "aString", [], {}, -2, 0, 1, 1.5, 4, 6, 10, 15, 105, 129697723]

  var runTest = function(input, expectedResult) {
    var actualResult = isPrime(input)
    var label = "isPrime(" + input + ") returns " + expectedResult
    it(label, function() {
      assert.strictEqual(actualResult, expectedResult)
    })
  }

  for (var i=0; i<primeArray.length; i++) {
    runTest(primeArray[i], true)
  }

  for (var i=0; i<nonPrimeArray.length; i++) {
    runTest(nonPrimeArray[i], false)
  }

  it("There are 78498 primes less than 1,000,000", function() {
    var count = 2       // Primes 2, 3
    // var limit = 1e2
    var limit = 1e6
    // var expected = 25
    var expected = 78498
    // console.time("timer")
    for (var i=5; i<=limit; i=i+6) {
      if (isPrime(i)) count++
      if (isPrime(i+2)) count++
    }
    // console.log("Time taken", console.timeEnd("timer"))
    assert.strictEqual(count, expected)
  })


})
