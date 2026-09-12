//dec multiple var in single line
let len, hei,wei,siz,age;
len= 50.2,hei="shiv",wei=70.5,siz=true,age=21;
console.log("ALl values");
console.log(len,hei,wei,siz,age);

//can create variables without consts let
count=155;
console.log(count); //bad

//type of
const user=[1,2,2];
console.log(typeof len);
console.log(typeof hei);
console.log(typeof wei);
console.log(typeof undefined);
console.log(typeof siz);
console.log(typeof user);
console.log(typeof null);
//expressions
// + - * /

//bool
const me=true;
console.log(me);
console.log(!me);
let ans=me/!me;
console.log(me/!me);
console.log(!me/me);
console.log(typeof ans);

//strict and loose operator
console.log(true == 1);       // true
console.log(true === 1);      // false
console.log(false == 0);      // true
console.log(false === 0);     // false
console.log(null == undefined);  // true
console.log(null === undefined); // false
console.log("10" == 10);      // true
console.log("10" === 10);     // false

console.log([]==[]);//false
console.log([]===[]);//false

const a=[];
const b=a;
console.log(a==b);//truee
console.log(a===b);//true
console.log(true=="true");//false
console.log(true==="true");//false

//sexy things
const num=05;
console.log(05);
console.log(0o5);//octal
console.log(typeof 05);
console.log(typeof num);













