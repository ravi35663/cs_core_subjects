/*
    Javascript to Find GCD and LCM of Two Numbers using Euclidean Algorithm
*/

// GCD:
function GCD(a,b){
    let min  = a > b? b:a;
    let max = a<b?b:a;
    while(1){
        const r = max % min;
        if(r==0){
            return min;
        }
        max = min;
        min = r;
    }
    return 1;
}
const num1 = process.argv[2];
const num2 = process.argv[3];
// const gcd = GCD(num1,num2);

// console.log("GCD: ",gcd);

//  LCM
function LCM(num1,num2){
    return (num1*num2)/(GCD(num1,num2));
}

const lcm = LCM(num1,num2);
console.log("LCM is : ",lcm);