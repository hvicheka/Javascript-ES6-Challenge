
"use strict";

var a = [1, 2, 3];

var b;

//answer 
//b = a.slice();
b = [...a];

b.push("newElement");

console.log(a);
// [1, 2, 3]

console.log(b);
// [1, 2, 3, "newElement"]
