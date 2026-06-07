//Javascript to Check Whether a Given Number is Perfect Number
// Number is perfect if sum of all it's  divisor excluding that number is equal to that number
// 6,28, 496, and 8,128.
const num = process.argv[2];
const isPerfectNumber = (num)=>{
    const half_num = Math.floor(num/2);
    let sum = 0;
    for(let i=1;i<=half_num;i++){
        if(num%i == 0){
            sum +=i;
        }
    }
    return sum == num;
}


// Optimized program to find perfect number
const isPerfect = (num)=>{
    if(num<1){
        return false;
    }
    let sum=1 // because 1 is always will be divisor of all positive numbers
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            sum +=i;
            let div2 = num/i;
            if(num % div2 == 0){
                sum +=div2;
            } 
        }
    }
    return sum == num;
}

const perfect = isPerfect(num);
if(perfect){
    console.log(`${num} is a perfect number`);
}else{
    console.log(`${num} is not a perfect number`);
}