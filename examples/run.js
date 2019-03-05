/* eslint-disable no-console */

// var Peo = require('peo');
var Peo = require('../src/Peo');
var peo = null;

console.log('');
peo = new Peo(360, 77);
console.log('var peo = new Peo(360, 77) - a normal sized fraction');
console.log('');
console.log(`peo.getAsResultText() returns ${peo.getAsResultText()}  (string)`);
console.log(`peo.getNum() returns ${peo.getNum()}  (integer)`);
console.log(`peo.getDenom() returns ${peo.getDenom()}  (integer)`);
console.log(`peo.getAsDecimal() returns ${peo.getAsDecimal()}  (decimal)`);
console.log(`peo.toString() returns ${peo.toString()}`);
console.log('');
console.log(peo);
console.log('');

console.log('');
peo = new Peo({2: 1e15, 3: 1e15, 5: 1e15, 7: 1e15, 11: 1e15, 13: 1e15});
console.log('var peo = new Peo({2:1e15, 3:1e15, 5:1e15, 7:1e15, 11:1e15, 13:1e15}) - a large integer, requires exponent representation');
console.log('');
console.log(`peo.getAsResultText() returns ${peo.getAsResultText()}`);
console.log(`peo.getNum() returns ${peo.getNum()}`);
console.log(`peo.getDenom() returns ${peo.getDenom()}`);
console.log(`peo.getAsDecimal() returns ${peo.getAsDecimal()}`);
console.log(`peo.toString() returns ${peo.toString()}`);
console.log('');
console.log(peo);
console.log('');

console.log('');
peo = Peo.fact(50);
console.log('var peo = Peo.fact(50) - a factorial beyond integer representation');
console.log('');
console.log(`peo.getAsResultText() returns ${peo.getAsResultText()}`);
console.log(`peo.getNum() returns ${peo.getNum()}`);
console.log(`peo.getDenom() returns ${peo.getDenom()}`);
console.log(`peo.getAsDecimal() returns ${peo.getAsDecimal()}`);
console.log(`peo.toString() returns ${peo.toString()}`);
console.log('');
console.log(peo);
console.log('');

console.log('');
peo = Peo.prim(50);
console.log('var peo = Peo.prim(50) - a primorial also beyond integer representation');
console.log('');
console.log(`peo.getAsResultText() returns ${peo.getAsResultText()}`);
console.log(`peo.getNum() returns ${peo.getNum()}`);
console.log(`peo.getDenom() returns ${peo.getDenom()}`);
console.log(`peo.getAsDecimal() returns ${peo.getAsDecimal()}`);
console.log(`peo.toString() returns ${peo.toString()}`);
console.log('');
console.log(peo);
console.log('');

console.log('');
peo = Peo.binom(100, 35);
console.log('var peo = Peo.binom(100, 35) - a factorial beyond integer representation');
console.log('');
console.log(`peo.getAsResultText() returns ${peo.getAsResultText()}`);
console.log(`peo.getNum() returns ${peo.getNum()}`);
console.log(`peo.getDenom() returns ${peo.getDenom()}`);
console.log(`peo.getAsDecimal() returns ${peo.getAsDecimal()}`);
console.log(`peo.toString() returns ${peo.toString()}`);
console.log('');
console.log(peo);
console.log('');

console.log('');
peo = Peo.binom(284, 28);
console.log('var peo = Peo.binom(284, 28) - a factorial beyond integer representation');
console.log('');
console.log(`peo.getAsResultText() returns ${peo.getAsResultText()}`);
console.log(`peo.getNum() returns ${peo.getNum()}`);
console.log(`peo.getDenom() returns ${peo.getDenom()}`);
console.log(`peo.getAsDecimal() returns ${peo.getAsDecimal()}`);
console.log(`peo.toString() returns ${peo.toString()}`);
console.log('');
console.log(peo);
console.log('');

console.log('');
peo = Peo.perm(109, 9);
console.log('var peo = Peo.perm(109, 9) - equivalent to 109*108*107*106*105*104*103*102*101');
console.log('');
console.log(`peo.getAsResultText() returns ${peo.getAsResultText()}`);
console.log(`peo.getNum() returns ${peo.getNum()}`);
console.log(`peo.getDenom() returns ${peo.getDenom()}`);
console.log(`peo.getAsDecimal() returns ${peo.getAsDecimal()}`);
console.log(`peo.toString() returns ${peo.toString()}`);
console.log('');
console.log(peo);
console.log('');

console.log('');
peo = Peo.multSeq(101, 5, 2);
console.log('var peo = Peo.multSeq(101, 5, 2) - equivalent to 101*103*105*107*109');
console.log('');
console.log(`peo.getAsResultText() returns ${peo.getAsResultText()}`);
console.log(`peo.getNum() returns ${peo.getNum()}`);
console.log(`peo.getDenom() returns ${peo.getDenom()}`);
console.log(`peo.getAsDecimal() returns ${peo.getAsDecimal()}`);
console.log(`peo.toString() returns ${peo.toString()}`);
console.log('');
console.log(peo);
console.log('');


console.log('');
console.log('For factorials, count: unique prime factors, all prime factors, all factors');
for (var i = 1; i <= 50; i++) {
  peo = Peo.fact(i);
  console.log(`${i}!   ${peo.countUniquePrimeFactors()}   ${peo.countPrimeFactors()}   ${peo.countFactors()}`);
}
console.log('');
