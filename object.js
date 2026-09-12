//object 
let name="shiv";
const details={name,id:"24BCA7469",rating:1652};
details.name;
console.log(details);
console.log(typeof details);

//Using Variables as Object Properties
const noOfSeats = 5;

const car = {
  model: 2011,
  seatingCapacity: noOfSeats,
  fuelType: "petrol"
};

const result = `It is a ${car.model} model car that runs on ${car.fuelType} and has ${car.seatingCapacity} seats.`

console.log(result);


//get valuse and can change val
// const person={
//     namee:"shiv mishra",
//     hobby:"Bakchodi"
// };
// person.namee="vaasu"
// console.log(person.namee,person.hobby);

//bracket notation
const person={
    namee:"shiv mishra",
    hobby:"Bakchodi"
};
console.log(person.namee);
console.log(person["namee"]);

// bracket one is more flexible 
let project={
  "project-lead":"SHiv",
  "age":15

}
// console.log(project.project-lead); // give error
console.log(project["project-lead"]); 

const projects = {
  "project-lead": "Adam",
  developer: "Samantha"
};

const keyName = "project-lead"

console.log(projects[keyName]); // Same as console.log(project["project-lead"]);

//Get Object Keys - Object.keys()
const baby = {
    name: "Aarav",
    age: 2,
    color: "fair",
    toys: 5
};

console.log(Object.keys(baby));
console.log(Object.values(baby));
console.log(Object.entries(baby));
//delete from object
delete baby.age; //==delete baby["age"];
console.log(baby);