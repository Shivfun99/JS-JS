//function stored in object
const admin={
    name:"shiv",
    age:21,
}
admin.displayGreeting=()=>console.log("Hello");
admin.displayGreeting();

//shorthand method
const firstPerson="Shiv";
const secondPerson="Sonam";

const getFullName=(firstPerson , secondPerson)=>{
    return  firstPerson+" "+secondPerson;
};
const userInformation={
    firstPerson,
    secondPerson,
    getFullName
};
console.log(userInformation.getFullName(userInformation.firstPerson,userInformation.secondPerson));
