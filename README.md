# Prime Exponent Object
## (PEO, `Peo` class)

A **Prime Exponent Object** (Peo) is a JavaScript object which stores small or large rational numbers as an object of the form {2:1000, 3:-567} = 2^1000 * 3^-567, i.e. as an object with keys equal to primes, and values equal to the exponent of that prime.

The class contains:
- A data store of these primes and exponents
- Cached data, e.g. a Fraction (from fraction.js), a textual description
- Functions which operate on the Peo, e.g. getFraction(), getText(), toString()

## To use `peo` package
- `npm i peo` in your JavaScript project directory to install this package in `package.json`
- `var Peo = require("peo")` at top of each JavaScript file to access the API

## API
### Constructors
- `new Peo(a)` for `a`
- `new Peo(a, b)` for `a/b`
- `new Peo(new Fraction(a, b))` for `a/b`  (`Fraction` is from the `fraction.js` package)
- `new Peo({p:3,q:-2})` for `p^3 / q^2` where `p`, `q` primes

### Functions
- `_.getPrimeExps()` returns the object of primes and exponents, such as `{2:3, 3:-2}`
- `_.getPrimeExp(p)` returns the exponent of that prime
- `_.getFraction()` returns a suitable Fraction object, similar to `new Fraction(8, 9)`
- `_.getText()` returns a String representation, e.g. `"8/9"`
- `_.toString()` returns the same String, overriding the default for Peo
