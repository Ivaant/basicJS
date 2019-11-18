'use strict';

//scalar type
const inc = (num) => num;

let a = 5;

const b = inc(a);

a = 10;
console.log({ a, b});

//reference type

const obj1 = {num: 5};

const incObj = (o) => o;

const obj2 = incObj(obj1);

obj1.num = 10;

console.dir(obj2);