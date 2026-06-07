/*
    Javascript to Find the Factorial of a Number
*/

const num = Number(process.argv[2]);
function fact(num){
    let factorial = 1;
    while(num!=1){
        factorial *= num;
        num--; 
    }
    return factorial;
}
const f = fact(num);
console.log(`Factorial of ${num} is ${f}`);