
"use strict";

var a, b, c;

var arr = [1, 2, 3, 4, 5, 6, 7];

[a,b,...c] = arr;

console.log(a);
// 1

console.log(b);
// 2

console.log(c);
// [3, 4, 5, 6, 7]
