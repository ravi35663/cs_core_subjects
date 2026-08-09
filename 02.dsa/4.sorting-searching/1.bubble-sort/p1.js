const comparatorFunction = (a,b)=>{
    console.log(`${a} and ${b}`);
    return a-b;
}
// const arr = [1,9,12,2,3,43,56,90,4,5,6];
// console.log('Sorted array is ',arr.sort(comparatorFunction))


// Sort based on string length
const comparatorFunctionBasedOnStringLength = (a,b)=>{
    return a.length-b.length;
}
const arr = ['My',"name",'is',"Ravi","Kumar","Sharma",'and','i','am','from','Bihar','East','Champaran'];
console.log(arr.sort(comparatorFunctionBasedOnStringLength));
