/*
    ==> Javascript to Find GCD and LCM of Two Numbers with and without recursive
*/

// GCD with and without recursion
// GCD: method-1(Naive method)
let num1 = Number(process.argv[2])
let num2 = Number(process.argv[3])

function GCD2(num1,num2){
    let a = num1<num2?num1:num2;
    let b = num1>num2 ? num1:num2;
    let temp = a;
    while(temp!=1){
        if(a%temp==0 && b%temp==0){
            return temp;
        }
        temp--;
    }
    return 1;
}
// Method-2 (With recursion)
function GCD1(a,b){
    // let r  = a %b;
    if(b==0){
        return a;
    }
    return GCD1(b,a%b);
}
const gcd1 = GCD1(num1,num2);
const gcd2 = GCD2(num1,num2);

//  LCM (Method - 1): 
function LCM1(num1,num2){
    let min = num1>num2?num2:num1;
    let max = num1>num2?num1:num2
    let result = min;
    while(result % min !=0 || result % max != 0 ){
        result += min;
    }
    return result;
}

//  LCM (Method - 2): 
function LCM2(num1,num2){
    function gcd(num1,num2){
        if(num2==0){
            return num1
        }
        return gcd(num2,num1%num2);
    }
    const g = gcd(num1,num2);
    return (num1 * num2) / g;

}

// const lcm1 = LCM1(num1,num2);
const lcm1 = LCM2(num1,num2);
console.log("LCM : ",lcm1);
