//create a string we can use '' or ""
let name1='shiv';
let name2="shiv";
let name3="'shiv'";
let name4='"shiv"';
console.log(name1);
console.log(name2);
console.log(name3);
console.log(name4);
//joining strings by + operator

console.log(name1+" "+name2+" "+name3+" ");
// +  CONCATE AND OTHER / * - CHANGE IT TO NUMBER 
console.log(name1-name2*name3); //NaN if string with maths

console.log("10S"+5);
console.log("10"-5);
console.log("10"*5);
console.log("10"/5);
//string
const f1=5;
const f2=105;
// backtics ``
//also called string interpolation 
console.log(`adding ${f1} and ${f2} gives ${f1+f2}`);

//multiple line template strings
const items=`Fruits: apple,mango,abc,def,fgf,dfd`;
console.log(items);

