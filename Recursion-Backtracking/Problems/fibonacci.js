/*
    Write a function to compute nth fibonacci number:
*/

// T.C: (2^N): GP series (Dry run to get time complexity) and S.C: O(N)
function fibonacci(n){
    if(n==1){
        return 0;
    }
    if(n==2){
        return 1
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

const n = 10;
const output = fibonacci(n);
console.log(`${n}th fibonacci number is: ${output}`);