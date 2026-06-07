/*
    Javascript to Find the Sum of Geometric Progression Series
    1,2,4,8,16, .....to nth term
    a = 1;
    r = 2/1 = 2
    Nth term is = a * r^(n-1)
    Sum of nth term = a(1-r^n)/(1-r)
*/

const r = 2;
const a = 1;
const n = 10;
console.log("Sum of ${n}th term of the GP series: ",a*(1-r**n)/(1-r));