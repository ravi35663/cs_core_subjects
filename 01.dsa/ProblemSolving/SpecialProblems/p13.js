/*
==> Javascript to Find the Sum of Arithmetic Progression Series
    1 ,2,3,4,5,6,7,8 .....40th
    a, a+d, a+2d, a+3d, a+4d, a+5d .... a+(n-1)d
    a = 1;
    d = 1
    n = 40;
    Sn = n*(2*a + (n-1)*d)/2
*/

const a = 1;
const d = 1;
const n = 10;
console.log("Sum is: ",(n*(n+1)/2));