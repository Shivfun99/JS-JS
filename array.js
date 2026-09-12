const names=["shiv",20,"naman","helloo"];
console.log(names);
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]); //indefined
//adding in array
names[4]="mishra";
console.log(names[4]);
//updating
names[0]="shiv kumar mishra";
console.log(names);


//array of arrays
const arrayOfArrays =[
  [1, 2, 3, 4, 5],
  ["Peter", "Mary", "May", "Ben"],
  [true, false, true, false]
];
console.log(arrayOfArrays);
//array of objects 
const arrayOfObjects = [
  {one: 1, two: 2},
  {fruit: "apple", vegetable: "onion"}
];
console.log(arrayOfObjects);
//adding by push

const veg=["corn","carrot","potato"];
veg.push("paneer");
console.log(veg);


//unshift -> use to pushon beginning
const vegetables = ["corn", "carrot", "potato"];
vegetables.unshift("beetroot");

console.log(vegetables);
//removing array elements
const sports = ["Football", "Cricket", "Basketball"];
sports.pop();
const lastElement = sports.pop();
console.log(lastElement);
console.log(sports);
console.log(sports.length);

//shift -> remove the first element
const sports = ["Football", "Cricket", "Basketball"];
sports.shift();

console.log(sports);