//for each
const arr=[1,2,3,1,3,"Shiv"];
arr.forEach((num)=>{
    console.log(num);
    
})
arr.forEach((num,i)=>{
    console.log(num,i);//i =index
    
})
arr.forEach((num,i,arr)=>{
    console.log(num,i,arr);
    
})
//filter
const arr1=[10,2,0,2,1,3,1,3,3333,"shiv","1"];
const newarr1=arr1.filter((num)=>num<2);
console.log((newarr1));//new array deta h
//