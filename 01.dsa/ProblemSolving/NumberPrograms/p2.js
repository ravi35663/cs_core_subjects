//Javascript to Check whether a Number is Prime or Not using Recursion
const num = process.argv[2];
function isPrime(num,i=2){
    if(num <=1){
        return false;
    }
    if(num%i==0){
        return false;
    }
    if(Math.sqrt(i)<=num){
        return isPrime(num,i+1);
    }else{
        return true;
    }
}

const prime = isPrime(num);
if(prime){
    console.log(`${num} is a prime number`);
}else{
    console.log(`${num} is not a prime number`);
}