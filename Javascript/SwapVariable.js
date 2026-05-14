/**
 * Swap variable without using temp variable
 */

// Solution 1

let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a);
console.log(b);

// Solution 2

let a1 = 10;
let b1 = 20

a1 = a1 + b1;
b1 = a1 - b1;
a1 = a1 - b1;

console.log(a);
console.log(b);