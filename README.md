# Prime Exponent Object
## (PEO, `Peo` class)

A **Prime Exponent Object** (Peo) is a JavaScript object which has keys equal to primes, and values equal to an integer exponent. Every rational number has a unique representation as a Peo.

## To use `peo` package
- `npm i peo` in your JavaScript project directory to install this package in `package.json`
- `var Peo = require("peo")` at top of each JavaScript file to access the API
- `var po = new Peo(n)` to return a new Peo for the number `n`

## API
- `Peo(n)` returns a Peo for the integer n
- `Peo(n, m)` returns a Peo for the rational number n/m
- `Peo([n, m])` returns this same Peo
- (Want to do one for a Fraction object too)

## Examples
- `Peo(12)` returns {2:2, 3:1} as a new Peo
- `Peo(1)` returns {} (a new Peo)
- `Peo(2)` returns {2:1}
- `Peo(p)` returns {p:1} for p a prime
- `Peo(p, q)` returns {p:1, q:-1} for p, q both primes
