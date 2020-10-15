"use strict";

function sum(...nums){
    let total = nums.reduce((acc,elem)=>acc+elem,0);
    console.log(total);
}

sum(1, 3);
//4

sum(10, 20, 5);
//35

sum(2, 5, 80, 1, 10, 12);
//110