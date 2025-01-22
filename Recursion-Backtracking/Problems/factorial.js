/*
    Factorial of a number:
    n! =  n * (n-1) * (n-2) *.....1
    
    input: 2
    output: 2

    input: 4
    output: 24

    input: 3
    output: 6
*/

// T.C: (N) & S.C(N)
function factorial(n){
    if(n==0){
        return 1;
    }
    // You must return otherwise you'll get undefined
    return n * factorial(n-1);
}

const output = factorial(5);
console.log("Factorial is: ",output)
