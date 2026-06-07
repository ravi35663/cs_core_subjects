/*
    Javascript to Find Sum of Series 1^2 + 2^2 + …. + n^2
    -> to find the sum of first square of n natural number, we can use
    Sn = (n)(n+1)(2n-1)(2n+1)/6 ==> (You can drive this formula)
*/

const n = Number(process.argv[2])
const Sn = (n)*(n-1)*(2*n-1)*(2*n+1)/6
console.log("Sum of first n natural number is : ",Sn)