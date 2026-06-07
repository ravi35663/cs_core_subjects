/*
    Javascript to Find the Factorial of a Number using Recursion
*/

const num = Number(process.argv[2]);
function fact(num){
    if(num==1){
        return 1;
    }
    return num*fact(num-1);
}

const f = fact(num);
console.log(`Factorial of ${num} is ${f}`);