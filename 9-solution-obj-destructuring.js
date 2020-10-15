
"use strict";

var obj = {
    x: 5,
    y: 20,
    z: 3
};

var mult = ({x,y,z}) => x * y *z;

console.log(mult(obj));
// 300
