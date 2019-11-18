'use strict';

const arr = [5, 'clear', true, 'Radio'];
delete arr[1];
arr[2] = undefined;

console.log(arr);
console.log(arr[1], 1 in arr);
console.log(arr[2], 2 in arr);

