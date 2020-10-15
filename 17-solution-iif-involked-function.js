
"use strict";

var greeting = (()=>{
    var greetingString = `Hey, that's`;
    var greet = (name) => `${greetingString} ${name}`;
    var changeGreeting = (newGreetingString) => {greetingString = newGreetingString };
    return {greet,changeGreeting}
})();


console.log(greeting.greet("Bob"));
// Hey, that's Bob

console.log(greeting.changeGreeting("Good Morning from"));
// undefined

console.log(greeting.greet("Emily"));
// Good Morning from Emily
