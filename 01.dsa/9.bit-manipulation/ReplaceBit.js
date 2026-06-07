/*
    Problem Statement:
    You are given two 32-bit numbers, N and M, and two bit positions i and j. 
    Write a method to set all bits between i and j in N equal to M 
    (i.e., insert the bits of M into N starting at bit i and ending at bit j).

    Example:
    N = 10000000000 (binary)
    M = 10101 (binary)
    i = 2, j = 6
    Output: 1001010100 (binary)
*/

function clearBitsIntTheRange(n,i,j){
    let a = (~0) << (j+1);
    let b = (1<<i) - 1;
    let mask = a | b;
    return n & mask
}

function replaceBits(n,i,j,m){
    n = clearBitsIntTheRange(n,i,j);
    m = m<<i;
    return n | m
} 

let N = 15 
let M = 2 
let i = 2, j = 4;
console.log(replaceBits(N,i,j,M)); // should be 11
