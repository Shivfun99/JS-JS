//number to string
console.log(2);
console.log(String(2));
console.log((2).toString());


//boolean to string
console.log(true);
console.log(String(true));
console.log(true.toString());

//string to number
const string = "2";
console.log(string);

const number = Number(string);
console.log(number);
//Empty strings get converted to 0.
let emptyString = "";
emptyString = Number(emptyString);
console.log(emptyString);
//non empty string to NaN 
let invalidNumberString = "2abc";
invalidNumberString = Number(invalidNumberString)
console.log(invalidNumberString);

//bool to number
let booleanTrue = true;
booleanTrue = Number(booleanTrue);
console.log(booleanTrue);

let booleanFalse = false;
booleanFalse = Number(booleanFalse);
console.log(booleanFalse);
//null gets converted to 0, while undefined gets converted to NaN.
console.log(Number(null));
console.log(Number(undefined));