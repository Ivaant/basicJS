'use strict';

const max = 2**53-1;
let bigInt = BigInt(max);

bigInt = bigInt**200n;

console.log('bigInt' + bigInt);
