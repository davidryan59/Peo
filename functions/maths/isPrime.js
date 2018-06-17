var isPrime = function(input) {
  // Naive primality test
  // For numbers larger than around 1e9, might want to switch to a faster test.

  // Non-numbers or non-integers are not prime
  if (!Number.isInteger(input)) return false

  // Its an integer number
  // 2 and 3 are prime
  if (input===2 || input===3) return true

  // Otherwise, if its less than 5 or divisible by 2 or 3 its not prime
  if (input<5 || input%2===0 || input%3===0) return false

  // We've got an integer at least 5, which is not divisible by 2 or 3
  // Check all numbers of the form 6k-1 or 6k+1, up to its square root
  var sqrt = Math.floor(Math.pow(input, 0.5))
  for (var i=5; i<=sqrt; i=i+6) {
    if (input%i===0 || input%(i+2)===0) return false
  }

  // Otherwise, its not got a factor up to its square root. So its a prime.
  return true
}

module.exports = isPrime
