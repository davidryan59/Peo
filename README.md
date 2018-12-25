# Prime Exponent Object
### (PEO, `Peo` class)

[![npm version](https://badge.fury.io/js/peo.png)](https://badge.fury.io/js/peo)

A **Prime Exponent Object** (Peo) is a JavaScript object which stores small or large rational numbers as an object of the form `{2:1000, 3:-567, 65536:-1} = 2^1000 * 3^-567 * 65537^-1`, i.e. as an object with keys equal to primes, and values equal to the exponent of that prime.

The class contains:
- A central data store of these primes and exponents
- Some cached data, e.g. numeric, textual or fractional representation (the latter using Fraction class from `fraction.js`)
- An API with many functions to manipulate the Peo and return the result as a new Peo.

Note that the Peo is designed to be immutable, i.e. all the API functions return a new Peo when any modification has taken place.

## Install
`npm install peo`  

## Usage
``` js
var Peo = require('peo')
var peo = new Peo(80, 14)
console.log(peo.getText())   // "40/7"
console.log(peo.getNum())    // 40
console.log(peo.getDenom())  // 7
console.log(peo.getVal())    // 5.7142857142857135
```

## Test
`npm test`  
`npm run examples`  

## API

### Constructors
``` js
new Peo(a)                      // integer a
new Peo(a, b)                   // fraction a/b
new Peo(a, b, n)                // fraction (a/b)^n
new Peo(fr)                     // fr a Fraction from fraction.js
new Peo(fr, n)                  // fr^n
new Peo({p1:e1, ...,pk:ek})     // equivalent to p1^e1 * ... * pk^ek
new Peo({p1:e1, ...,pk:ek}, n)  // equivalent to p1^(n*e1) * ... * pk^(n*ek)
```

These constructors have been tested up to `(11/2)^1000000000 = new Peo(11, 2, 10^9)`  
Peo can handle large numbers! (With small-ish prime factors.)  

### Static or Class methods
``` js
Peo.binom(n, r)    // returns 'n choose r', e.g. binomial coefficient
Peo.fact(a)        // returns a! = a * (a-1) * ... * 1 (Factorial function)
Peo.fact(a, b)     // returns a * (a-1) * ... * (a-(b-1))
Peo.fact(a, b, c)  // returns a * (a+c) * ... * (a+c(b-1))
Peo.prim(a)        // returns product of primes between 1 and a
Peo.prim(a, b)     // returns product of primes between a and b
```

### Instance methods

#### Accessing prime exponents
``` js
peo.checkPrimeExps({p1:e1,...})  // returns Boolean
peo.getPrimeExp(p)               // returns numeric, the exponent
peo.getPrimeExps([p1,...])       // returns {p1:e1,...}
```

#### General functions
``` js
peo.copy()      // returns a copy of the original peo
peo.toString()  // returns a text representation of the Peo (same as .getText()
```

#### Maths operations
``` js
peo.get1()               // returns a new identity Peo, e.g. new Peo(1)
peo.mult(other)          // returns a new Peo which is this*other  
peo.mult(other, n)       // returns a new Peo which is this*(other^n)
peo.pow(n)               // returns a new Peo which is this^n
peo.split(p1, [p2, p3])  // splits a Peo into an array of 3 components:
                         // [{p1:e1}, {p2:e2, p3:e3}, {everything else}]
                         // The argument list for .split is extensible and can contain
                         // primes or arrays of primes in any order.
```

#### Numeric values
``` js
peo.getDenom()     // returns the denominator of the fraction
peo.getFraction()  // returns relevant Fraction object from fraction.js
peo.getNum()       // returns the numerator of the fraction
peo.getText()      // returns a text representation of the Peo
peo.getVal()       // returns a decimal representation of the Peo
```

#### Logarithmic numeric values
``` js
peo.getLog(b)       // returns log of Peo to base b (if omitted, natural log)
peo.getLogDenom(b)  // returns log of Peo denominator
peo.getLogNum(b)    // returns log of Peo numerator
```

#### Numeric stats
``` js
peo.countDistinctFactors()  // returns the number of distinct prime factors of the Peo
peo.countFactors()          // returns the total number of prime factors of the Peo
peo.getHighestAbsExp()      // returns the highest abs(exponent) in the Peo
peo.getHighestExp()         // returns the highest exponent in the Peo
peo.getHighestPrime()       // returns the highest prime in the Peo
peo.getLiouville()          // returns the Liouville function on the Peo
peo.getLowestExp()          // returns the lowest exponent in the Peo
peo.getLowestPrime()        // returns the lowest prime in the Peo
peo.getMobius()             // returns the Mobius function on the Peo
```
