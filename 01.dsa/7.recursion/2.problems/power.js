/* 
    Write a function called power which accepts a base and an exponent. 
    The function should return the power of the base to the exponent.
    This function should mimic the functionality of Math.pow()  - 
    do not worry about negative bases and exponents.
    // power(2,0) // 1
    // power(2,2) // 4
    // power(2,4) // 16
*/

const power = (base, iteration) => {
    if(iteration == 0 ){
        return 1;
    }
    return base * power(base, iteration-1 );
}

console.log(power(2,0));
console.log(power(2,2));
console.log(power(2,4));



// Optimized power:
// T.C : O(LogN) and S.C: O(LogN)
const fastPower = (a,n)=>{
    if(n==0){
        return 1;
    }
    let subProblem = fastPower(a,Math.floor(n/2));
    let subSquare = subProblem * subProblem;
    if( n%2 == 1){
        return subSquare * a;
    }
    return subSquare;
}
console.log(fastPower(2,4))