
"use strict";

var multiplyBy = (a,mul=2) => console.log(a * mul);

multiplyBy(2);
// 4

multiplyBy(2, undefined);
// 4

multiplyBy(2, 0);
// 0

multiplyBy(5, 10);
// 50
