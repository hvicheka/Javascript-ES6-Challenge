
"use strict";

var vowelsCount = 0;
var vowels = ["a", "e", "i", "o", "u"];

var str = "Today is best day of my life";

// SOLUTION 1
for(let i = 0; i < str.length; i++){
    vowels.includes(str[i]) ? vowelsCount++ : 0;
}

// SOLUTION2 
// for(let s of str){
//     vowels.includes(s) ? vowelsCount++ : 0;
// }

console.log(vowelsCount);

// 8
