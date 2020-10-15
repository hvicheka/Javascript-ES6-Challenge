
"use strict";

var missingArg = () => { throw new Error('Uncaught Error: Function square requires an argument!') }

var square = (a = missingArg()) => console.log(a*a);

square(10);
// 100

square();
// AFTER: Uncaught Error: Function square requires an argument!
//square(100);
