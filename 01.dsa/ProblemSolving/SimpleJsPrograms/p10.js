//Javascript to Find Sum of Digits of a Number using Recursion
const num = Number(process.argv[2]);
const findSum = (num)=>{
    if(num===0){
        return num;
    }
    r = num %10;
    num = Math.floor(num/10);
    return r + findSum(num);  
}

const sum = findSum(num);
console.log("Sum of the digits is ",sum);