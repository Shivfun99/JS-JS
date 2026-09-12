//function 
function names(){
    console.log("Hello I am Shiv.");
}
names();
//eq function
const names1=function(){
    console.log("I am shivvvvv");
}
names1();
//arrow function
const names2=()=>{
    console.log("hellooooooo");
    
}
names2();

const greetWelcome = () => {
  console.log("Welcome");
}

greetWelcome();

const spellInteresting = () => {
  console.log("i");
  console.log("n");
  console.log("t");
  console.log("e");
  console.log("r");
  console.log("e");
  console.log("s");
  console.log("t");
  console.log("i");
  console.log("n");
  console.log("g");
}
const spellBoring = () => {
  console.log("b");
  console.log("o");
  console.log("r");
  console.log("i");
  console.log("n");
  console.log("g");
}

spellInteresting();
spellBoring();

//parameters and arguments
const greeting=(greetingType)=>{
    console.log(greetingType);
    
}
greeting("Hii");
greeting("Namaste");
greeting("Welcome");
//many parameters

const calSum=(fnum,snum,tnum)=>{
    const sum=fnum+snum+tnum;
    console.log(sum);
    

}
calSum(5,6,6);
calSum(5,6,6888);
calSum(5,8886,6);