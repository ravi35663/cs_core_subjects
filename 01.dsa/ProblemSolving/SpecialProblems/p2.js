/* 
    Write a function called recursiveRange which accepts a number and adds up all 
    the numbers from 0 to the number passed to the function 
*/
// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

const num = Number(process.argv[2])
function recursiveRange(num){
    if(num === 0){
        return 0;
    }
    return num + recursiveRange(num-1) 
}

const sum = recursiveRange(num);
console.log("Sum is: ",sum);