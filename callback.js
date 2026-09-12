//define a function and pass it as an argument to another function
const statusMessage=(isCorrect)=>{
    if(isCorrect) {
        console.log("you are right");
    }
    else {
        console.log("incorrect ");
    }
    
}

const validateSol=(ans,callback)=>{
    const correctans=10;
    const res=ans===correctans;
    callback(res);
}
validateSol(10,statusMessage);