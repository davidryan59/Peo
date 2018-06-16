// Can test this function against the Prime Counting Function
// https://en.wikipedia.org/wiki/Prime-counting_function
// Run this in node:
// b=0; for (var i=0; i<=1e7; i++) if (isPrime(i)) b++
// result is b = 664,579, in less than 2 seconds
// Same for 1e8 returned 5,761,455 in less than a minute
// Conclusion: Function OK :)
// (Can build these into unit tests, quite convincing that the function is correct.)

var isPrime = function(number) {
  // Assumption: parameter number is a Number

  // This is not complete yet
  if (number<2) return false
  if (!(Number.isInteger(number))) return false
  // Got an integer, at least 2
  if (number===2 || number===3 || number===5) return true
  if (number%2===0 || number%3===0 || number%5===0) return false
  if (number>1e9) return false    // For 1e9, this algorithm will run too slowly, so falsify it
  var aMax = Math.ceil(Math.pow(number, 0.5))
  for (var a=6; a<=aMax; a=a+6) {
    // Need to check for prime factors 7, 11, 13, 17, 19, 23, (25), 29...
    if (number%(a+1)===0 || number%(a+5)===0) return false
  }
  return true
}

module.exports = isPrime
