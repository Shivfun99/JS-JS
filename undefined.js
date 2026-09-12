let age;
console.log(typeof age); //print undefined 
const hi;
console.log(typeof hi);  // error because const means constant and it should be defined 

let a;
console.log(a);              // undefined

let b = undefined;
console.log(b);              // undefined

const c = undefined;
console.log(c);              // undefined

const d;                     // SyntaxError

console.log(x);              //  ReferenceError if x was never declared
