/* 
    5 ==> Write a recursive function called fib which accepts a number and returns 
    the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is 
    the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... 
    which starts with 1 and 1, and where every number thereafter is equal to the sum of 
    the previous two numbers.
    // fib(4) // 3
    // fib(10) // 55
    // fib(28) // 317811
    // fib(35) // 9227465
*/

const fib = (num)=>{
    if(num == 1 || num == 2){
        return 1;
    }
    return fib(num-1) + fib(num-2);
}

console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(6))
console.log(fib(7))
console.log(fib(8))
console.log(fib(9))
console.log(fib(10))
console.log(fib(11))
console.log(fib(12))