/*
💡  Square Roots

    Given an integer N and an integer P, you need to find the square root of number N up to P places. 
    Do it without using a library function.

    Input Array: N = 10, P = 3

    Output:
    3.162
*/

function squareRoot(n,p){
    const integer = getInteger(n);
    console.log("Integer is: ",integer);
    let k = 0.1;
    let v = integer;
    while(p){
        while(v * v <= n){
            v  = v + k
        }
        v = v - k;
        k = k / 10.0;
        p--;
    }
    return v;
}

// Get the integer part:
function getInteger(n){
    let start = 1;
    let end = n;
    let root = -1;
    while(start <=end){
        let mid = Math.floor((start+end)/2);
        let s = mid * mid
        if(s === n){
            return mid;
        }else if(s < n){
            start = mid+1
            root = mid;
        }else{
            end = mid-1
        }
    }
    return root;
}

const n = 10;
const p = 3;

squareRoot(n,p);