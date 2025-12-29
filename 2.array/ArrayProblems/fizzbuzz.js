/*
    Write a fizzbuzz function that returns a array with the numbers from 1 to n with the following 
    restrictions:
    1) for multiples of 3 store "Fizz" instead of the number
    2) for multiples of 5 store "Buzz" instead of the number
    3) for numbers which are multiples of both 3 and 5 store "FizzBuzz"
*/

function fizzBuzz(n){
    let result = [];
    for(let i=1;i<=n;i++){
        if(i % 15 ==0){
            result.push("FizzBuzz")
        }else if(i % 3 == 0){
            result.push("Fizz")
        }else if(i %5 == 0){
            result.push('Buzz')
        }else{
            result.push(String(i));
        }
    }
    return result;
}

const n = 50;
console.log(fizzBuzz(n));