const greeting = "Good Morning!";
console.log(greeting, isNaN(greeting));

const string = "Hello!";
console.log(string, isNaN(string));

console.log(`"2"`, isNaN("2"));

console.log(`false`, isNaN(false));

console.log(`0`, isNaN(0));

console.log(`""`, isNaN(""));

//composite data types
console.log(typeof { name: "This is an object" });
console.log(typeof ["This", "is", "an", "array"]);
console.log(typeof new Date());
console.log(typeof new Map());