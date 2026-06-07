/*
    Javascript to Find First N Fibonacci Numbers
    0,1,1,2,3,5,8,13,21,33,54 ......
*/

function fib(num){
    let a = 0;
    let b = 1;
    for(let i=0;i<num;i++){
        let sum = a+b;
        a = b;
        b = sum;
        // process.stdout.write(`${sum} `);
    }
    return b;
}
const num = process.argv[2];
const f = fib(num);
console.log(`${num}th fibonacci number is: ${f}`);