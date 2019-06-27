# peo
Prime Exponent Object module containing `Peo` class. Find [module on npm](https://www.npmjs.com/package/peo) and [code repo with examples on GitHub](https://github.com/davidryan59/Peo).

[![npm version](https://badge.fury.io/js/peo.png)](https://badge.fury.io/js/peo)[![Build status](https://travis-ci.org/davidryan59/Peo.svg?master)](https://travis-ci.org/davidryan59)

A **Prime Exponent Object** (Peo) stores small or large rational numbers as an object of the form `{p1:e1, p2:e2, ...}`. A simple example would be `20/3` stored as `{2:2, 3:-1, 5:1}`.

This format aids multiplication and exponentiation of large numbers. Maximum prime factor size is approximately 10^15, so large factorial, primorial or combinatoric values can be made, e.g. factorial of `1000` or higher. Calculations on Peos via the API return new Peo objects in order to keep Peo instances immutable.

The class contains:
- A central data store of these primes and exponents
- Some cached data, e.g. numeric or text representations
- An API with many functions to manipulate the Peo and return the result as a new Peo.

To install, use `npm i peo`. To test, `npm test`. For examples of usage see Github `examples` directory, via `npm run examples`. Limits of both prime (key) and exponent (value) are around 10^15.

## API

### General constructors using objects
``` js
new Peo({num:a, denom:b, pow:c})    // Peo for rational number (a/b)^c
new Peo({p1:e1, ...,pk:ek})         // get Peo for p1^e1 * ... * pk^ek  (keys are prime numbers)
new Peo({p1:e1, ...,pk:ek}, n)      // get Peo for (p1^e1 * ... * pk^ek) ^ n
```

### Shorthand constructors
``` js
new Peo(a)         // integer a
new Peo(a, b)      // integers a, b => fraction a/b
new Peo(a, b, n)   // integers a, b, n => fraction (a/b) ^ n
new Peo(d)         // decimal d (find a fraction that approximates d)
new Peo(d, n)      // decimal d^n
new Peo(txt)       // txt an integer or fraction in text form e.g. "5", "3/2"
new Peo(txt, n)    // txt ^ n
new Peo(peo)       // Copies prime information in a peo into a new peo. Also see instance method copy()
new Peo(peo, n)    // peo ^ n
```

### Static or Class methods
``` js
Peo.fact(n)          // returns n! = n * (n-1) * ... * 1        (Factorial function)
Peo.perm(n, r)       // returns n * (n-1) * ... * (n-(r-1))     (Permutation function)
Peo.binom(n, r)      // returns n choose r; perm(n, r)/fact(r)  (Binomial coefficient)
Peo.multSeq(n, r, j) // returns n * (n+j) * ... * (n+j(r-1))    (Multiply r terms of a sequence with jump j)
Peo.prim(a)          // returns product of primes from 1 and a  (Primorial function)
Peo.multPrimes(a, b) // returns product of primes from a and b  (Primes in given range)
```

### Instance methods

#### Accessing prime exponents
``` js
peo.checkPrimeExps({p1:e1,...})  // returns Boolean if these prime exponents agree
peo.getPrimeExp(p)               // returns the exponent as a number
peo.getPrimeExps()               // returns a copy of all prime info {p1:e1,...}
peo.getPrimeExps([p1,...])       // returns a copy of prime info for specified primes only
```

#### General functions
``` js
peo.toString()  // returns a JSON object for the primes and exponents obtained via getPrimeExps()
peo.compress()  // removes all cached information, reducing size of peo. Use if you've got millions of peos.
peo.copy()      // returns a copy of the original peo. Cached information not transferred.
peo.construct() // anyPeo.construct(...args) should return Peo instance equivalent to new Peo(...args).
                // This allows any Peo instance to be used as a constructor.
```

#### Maths operations
``` js
peo.get1()               // returns a new identity Peo, e.g. new Peo(1)
peo.mult(m)              // returns a new Peo which is this * integer m
peo.mult(m, n)           // returns a new Peo which is this * integer m^n
peo.mult(otherPeo)       // returns a new Peo which is this * otherPeo  
peo.mult(otherPeo, n)    // returns a new Peo which is this * (otherPeo^n)
peo.pow(n)               // returns a new Peo which is this^n
peo.split(p1, [p2, p3])  // splits a Peo into an array of 3 components:
                         // [{p1:e1}, {p2:e2, p3:e3}, {everything else}]
                         // The argument list for .split is extensible and can contain
                         // primes or arrays of primes in any order.
// Unary comparisons
peo.is1()                   // Return true if peo equivalent to 1/1, false otherwise
peo.isNot1()                // Return false if peo equivalent to 1/1, true otherwise
peo.lessThan1()             // Return true if peo has log value < 0, false otherwise
peo.lessThanOrEqualTo1()    // Return true if peo has log value <= 0, false otherwise
peo.greaterThan1()          // Return true if peo has 0 < log value, false otherwise
peo.greaterThanOrEqualTo1() // Return true if peo has 0 <= log value, false otherwise
// Comparing the log values, rather than original value, means that peos of any size are handled correctly.

// Binary comparisons
peo.equals(otherPeo)               // Return true if peos have equal value, false otherwise
peo.notEquals(otherPeo)            // Return false if peos have equal value, true otherwise
peo.lessThan(otherPeo)             // Return true if peo < otherPeo, false otherwise (this is calculated using logs)
peo.lessThanOrEqualTo(otherPeo)    // Return true if peo <= otherPeo, false otherwise
peo.greaterThan(otherPeo)          // Return true if peo > otherPeo, false otherwise
peo.greaterThanOrEqualTo(otherPeo) // Return true if peo >= otherPeo, false otherwise
```

#### Numeric values
``` js
peo.getAsDecimal()       // returns a decimal representation of the Peo, if its not too big
peo.getAsFractionText()  // returns fraction text if num, denom < around 1e15. Otherwise return NA.
peo.getAsResultText()    // return fraction text, unless numbers are large, then return 10^NN.NN representation
peo.getNum()             // returns integer numerator of the fraction
peo.getDenom()           // returns integer denominator of the fraction
```

#### Logarithmic numeric values
``` js
peo.getLog(b)       // returns log of Peo to base b (if omitted, natural log)
peo.getLogNum(b)    // returns log of Peo numerator
peo.getLogDenom(b)  // returns log of Peo denominator
```

#### Numeric stats
``` js
peo.countUniquePrimeFactors() // returns the number of different prime factors of the Peo
peo.countPrimeFactors()       // returns the number of prime factors, with multiplicity
peo.countFactors()            // returns the total number of factors of the Peo
peo.getLowestPrime()          // returns the lowest prime in the Peo (* null for 1)
peo.getLowestExp()            // returns the lowest exponent in the Peo (*)
peo.getHighestPrime()         // returns the highest prime in the Peo (*)
peo.getHighestExp()           // returns the highest exponent in the Peo (*)
peo.getHighestAbsExp()        // returns the highest abs(exponent) in the Peo (*)
peo.getLiouville()            // returns the Liouville function on the Peo (-1 ^ countFactors)
peo.getMobius()               // returns the Mobius function on the Peo (-1 ^ countFactors if square-free, 0 otherwise)
peo.getBenedettiHeight()      // returns the Benedetti Height or the Complexity of the Peo; N x D when N/D is in lowest terms
```
