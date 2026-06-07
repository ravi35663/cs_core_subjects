/*
   Javascript to Find Nth Fibonacci Number using Recursion
*/

const num = Number(process.argv[2]);
function fib(num){
    if(num==0){
        return 0;
    }
    if(num == 1){
        return 1;
    }
    return fib(num-1) + fib(num-2);
}

const f = fib(num+1);
console.log(`${num}th fibonacci number is :${f}`);